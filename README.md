# Project

The goal of the challenge was to create a backend and a frontend where the user could fetch all the data from the database and also be able to save simple data in it.

## Starting the project

### **Server**

- ##### Navigate into the server folder:

```bash
cd server
```

- ##### Configure your .env file with Mongo URI
- ##### Start the server:

```bash
npm dev
or
yarn dev
```

Server should run at [http://localhost:4000](http://localhost:4000)

#### **Server Endpoints:**

#### **GET**

/api/applicants

#### **POST**

/api/applicants

**Body:**

| Name        | Required |  Type  |
| ----------- | -------- | :----: |
| `fullName`  | required | string |
| `email`     | required | string |
| `textField` | required | string |

---

### **Client**

- #### Navigate into the client folder:

```bash
cd client
```

- #### Start the server:

```bash
npm start
or
yarn start
```

Client should run at [http://localhost:3000](http://localhost:3000)
