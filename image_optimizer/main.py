import tkinter as tk
from tkinter import filedialog, ttk, messagebox
from tkinterdnd2 import DND_FILES, TkinterDnD
from PIL import Image
import os

def comprimir_imagen(input_path, output_path, calidad=60):
    try:
        img = Image.open(input_path)
        img.save(output_path, optimize=True, quality=calidad)
    except Exception as e:
        print(f"Error con {input_path}: {e}")

class App(TkinterDnD.Tk):
    def __init__(self):
        super().__init__()
        self.title("Compresor de Imágenes")
        self.geometry("500x300")
        self.configure(bg="#f0f0f0")

        self.calidad = tk.IntVar(value=60)
        self.output_dir = os.getcwd()

        # Label para soltar archivos
        self.drop_label = tk.Label(self, text="Arrastra aquí imágenes o carpetas", bg="white", relief="groove", height=5)
        self.drop_label.pack(fill="x", padx=10, pady=10)
        self.drop_label.drop_target_register(DND_FILES)
        self.drop_label.dnd_bind('<<Drop>>', self.on_drop)

        # Selector de calidad
        ttk.Label(self, text="Calidad:").pack()
        self.quality_scale = ttk.Scale(self, from_=10, to=95, variable=self.calidad, orient="horizontal")
        self.quality_scale.pack(fill="x", padx=10)

        # Botón para seleccionar carpeta de salida
        ttk.Button(self, text="Seleccionar Carpeta de Salida", command=self.elegir_salida).pack(pady=10)

        # Mostrar carpeta seleccionada
        self.output_label = tk.Label(self, text=f"Carpeta de salida: {self.output_dir}")
        self.output_label.pack()

    def elegir_salida(self):
        path = filedialog.askdirectory()
        if path:
            self.output_dir = path
            self.output_label.config(text=f"Carpeta de salida: {self.output_dir}")

    def on_drop(self, event):
        paths = self.split_paths(event.data)
        for path in paths:
            if os.path.isdir(path):
                self.comprimir_batch_en_directorio(path)
            else:
                self.comprimir_archivo(path)

        messagebox.showinfo("Proceso completado", "Imágenes comprimidas exitosamente.")

    def split_paths(self, data):
        return self.tk.splitlist(data)

    def comprimir_batch_en_directorio(self, dir_path):
        for root, _, files in os.walk(dir_path):
            for file in files:
                if file.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                    full_path = os.path.join(root, file)
                    self.comprimir_archivo(full_path)

    def comprimir_archivo(self, filepath):
        filename = os.path.basename(filepath)
        output_path = os.path.join(self.output_dir, filename)  # Conserva el nombre original
        comprimir_imagen(filepath, output_path, calidad=self.calidad.get())

if __name__ == "__main__":
    app = App()
    app.mainloop()