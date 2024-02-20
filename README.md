# PDF to TEXT

This project allows you to upload a PDF file and extract its data into a text format.

## How to Use

### Node.js (program.js)

1. **Install Dependencies**:

   To install the necessary dependencies, first initialize a Node.js project by running the following commands in your terminal:

   ```bash
   npm init -y
   npm install pdfjs-dist fs
   ```

2. **Run the Script**:
   Once the dependencies are installed, you can run the Node.js script to extract data from the PDF. Run the following command:

   ```bash
   node extractPDF.js
   ```

### **Python (program.py)**:

1. **Create and Activate Virtual Environment**:
   Create a Python virtual environment by running the following command in your terminal:

   ```bash
   python -m venv myenv
   ```

Then, activate the virtual environment depending on the operating system you're using:

- On Windows:

  ```bash
  myenv\Scripts\activate
  ```

- On macOS and Linux:

  ```bash
  source myenv/bin/activate
  ```

2. **Install Dependencies**:

   With the virtual environment activated, install the PyPDF2 library using pip:

   ```bash
   pip install PyPDF2
   ```

3. **Run the Script**:

   Once the dependencies are installed, you can run the Python script to extract data from the PDF. Run the following command:

   ```bash
   python program.py
   ```
