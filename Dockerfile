FROM node:carbon

# ������� ���������� app
WORKDIR /app

# ���������� ����������� ����������
# ������������ ������ ����������� ��� ����������� ��� package.json, ��� � package-lock.json,
# �������� � npm@5+
COPY package*.json ./

RUN npm install
# ������������ ��� ������ ���� � ����������
# RUN npm install --only=production

# ����������� ��������� ����������
COPY src /app

EXPOSE 8080
CMD [ "node", "server.js" ]