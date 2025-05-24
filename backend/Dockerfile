FROM python:3.11-slim

WORKDIR /app

ADD requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

ADD . .

EXPOSE 5000

CMD ["python", "app.py"]