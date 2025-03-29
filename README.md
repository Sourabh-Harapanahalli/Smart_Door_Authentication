# Smart Door Authentication System

## 📌 Overview
The **Smart Door Authentication System** is a cloud-based, AI-driven access control solution that leverages **Amazon Kinesis Video Streams**, **AWS Rekognition**, **DynamoDB**, **AWS Lambda**, and **Amazon SNS** to provide secure and automated visitor authentication. This system is designed to identify visitors through facial recognition, send one-time passcodes (OTP) for access validation, and manage visitor records seamlessly. 

This project is particularly useful in applications such as **smart home security, corporate office access control, and automated visitor management systems**. By utilizing **serverless and event-driven architecture**, the system ensures scalability, reliability, and minimal operational overhead. 

### **Key Benefits:**
- **Automated Access Control** – Eliminates the need for physical keys or security personnel.
- **Enhanced Security** – Prevents unauthorized access using advanced facial recognition.
- **Real-Time Processing** – Kinesis Video Streams and AWS Rekognition allow for immediate visitor authentication.
- **Scalability & Cost Efficiency** – Serverless AWS architecture ensures cost-effective scaling.
- **Seamless User Experience** – Visitors receive instant OTPs for quick verification and entry.

## 🎯 Features
- **Facial Recognition** using Amazon Rekognition.
- **Secure OTP Authentication** via AWS SNS.
- **Visitor Registration & Management** in DynamoDB.
- **Real-time Video Streaming** with Kinesis Video Streams.
- **Automated Access Control** using Lambda functions.
- **Scalable & Serverless** architecture deployed on AWS.

---

## 🏗️ Architecture
![System Architecture](architecture/architecture-kinesis.JPG)

### **Components**
1. **Kinesis Video Streams (KVS)** – Captures and streams video for analysis.
2. **AWS Rekognition** – Identifies and verifies visitors.
3. **Amazon DynamoDB** – Stores visitor details and OTPs.
4. **AWS Lambda** – Handles visitor authentication logic.
5. **Amazon SNS** – Sends OTP notifications.
6. **S3 Buckets** – Stores visitor images and recognition data.
7. **API Gateway** – Provides endpoints for frontend integration.
8. **Frontend UI** – Built using JavaScript, HTML, and API Gateway for OTP validation.

---

## 🚀 Getting Started

### **1. Clone the Repository**
```bash
git clone https://github.com/sourabh-harapanahalli/Smart_Door_Authentication.git
cd Smart_Door_Authentication
```

### **2. AWS Prerequisites**
Ensure you have the following AWS services configured:
- **S3 Buckets:** `uploadbucket123`, `rekognitionbucket11`
- **DynamoDB Tables:** `visitors`, `passcodes`
- **SNS Topics:** `returning_visitor`, `new_visitor`
- **Kinesis Video Streams:** `LiveRekognitionVideoAnalysisBlog`
- **IAM Role with Policies** for Rekognition, KVS, DynamoDB, and Lambda.

---

## 🔧 Installation & Setup

### **3. Deploy AWS Lambda Functions**
Update and deploy the Lambda functions:
```bash
aws lambda update-function-code --function-name LF0 --zip-file fileb://LF0.zip
aws lambda update-function-code --function-name LF1 --zip-file fileb://LF1.zip
aws lambda update-function-code --function-name LF2 --zip-file fileb://LF2.zip
```

### **4. API Gateway Configuration**
1. Create an **API Gateway**.
2. Enable **CORS** for the required endpoints.
3. Deploy the API and obtain the Invoke URL.

### **5. Configure Frontend**
Modify `otpValidation.js` to use your **API Gateway Invoke URL**:
```js
const apiUrl = 'https://your-api-id.execute-api.us-west-2.amazonaws.com/dev/otp';
```

### **6. Run the Frontend**
Simply open `index.html` in a web browser.

---

## 🛠️ Usage Instructions
1. **For Known Visitors:**
   - The system detects their face via Kinesis Video Streams.
   - An OTP is sent to their registered phone number via SNS.
   - Enter the OTP on the **frontend UI** to gain access.

2. **For Unknown Visitors:**
   - The system captures their image and notifies the admin.
   - The admin approves access and registers their details.
   - The visitor receives an OTP for temporary access.

---

## 🏗️ Deployment on AWS
You can deploy the entire system using AWS CloudFormation or Terraform. Below is an AWS CLI example:
```bash
aws cloudformation deploy --template-file cloudformation.yml --stack-name SmartDoorStack
```

---

## 📜 License
This project is licensed under the **Apache 2.0 License**.



