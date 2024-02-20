import PyPDF2

pdf = open("constancia.pdf", "rb")
reader = PyPDF2.PdfReader(pdf)
page = reader._get_page(0)

info = page.extract_text()

with open("constancia.txt", "w") as file:
    file.write(info)