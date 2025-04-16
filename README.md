# Escape

Escape is a Peer-to-Peer (P2P) marketplace business model for renting vehicles. In this model, car owners, referred to as Hosts, will have the ability to list their vehicles on my platform, while renters (users) can browse, select, and book these vehicles for temporary use. This application will serve as an intermediary, facilitating seamless communication and transactions between Hosts and renters. It will offer features like secure payments, real-time availability, insurance options, and user reviews to build trust. The goal is to provide a convenient, affordable, and efficient vehicle rental experience for both parties while generating revenue through commission fees, service charges, and potential partnerships with insurance providers.

# Working
First the host will create their account to rent their vehicles on our app. It will ask host all the required documents then after they are verified, host is allowed to host their vehicles. After hosting their vehicle data is stored in supabase database
Next the user who wants to rent the vehicle, will be asked vehicle dropoff location and vehicle pickup location. According to the dropoff location the vehicles will be searched within the 12km radius of dropoff location.
After searching it will display all the available vehicles within the 12km radius to user.




| **Area**           | **Tech Used**                   |
|--------------------|---------------------------------|
| **Frontend**       | React + TypeScript              |
| **Backend**        | Node.js + Express + TypeScript  |
| **Styling**        | Tailwind CSS                    |
| **Package Manager**| npm                             |



## Setting Up Project locally
Follow the steps below to run the project on your local development environment:

Clone the repository
``` bash 
git clone https://www.github.com/vipulgupta28/Escape
```

For Frontend
```bash 
cd Frontend
npm install
npm run dev
```

For Backend
```bash
cd Backend
npm install
npm run dev
```




