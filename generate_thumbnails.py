import fitz
import os
import glob

pdf_files = glob.glob("document/certifications/*.pdf")
for pdf in pdf_files:
    png_path = pdf.replace('.pdf', '.png')
    if not os.path.exists(png_path):
        doc = fitz.open(pdf)
        page = doc[0]
        pix = page.get_pixmap(dpi=150)
        pix.save(png_path)
        print(f"Generated {png_path}")
