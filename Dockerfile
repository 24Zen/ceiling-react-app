# ใช้ Node.js เวอร์ชัน 18 เป็นเบส
FROM node:18

# กำหนดไดเร็กทอรีงาน
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดทั้งหมด
COPY . .

# สร้างแอป
RUN npm run build

# กำหนดพอร์ตที่แอปจะทำงาน
EXPOSE 3000

# เรียกใช้แอป
CMD ["npm", "start"]
