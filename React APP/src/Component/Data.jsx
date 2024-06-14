import Invoices from "./Invoices";

const Data = [
    {
        "name": "John Doe",
        "roll_number": "1001",
        "price":"102 ₹",
        "city": "New York"
    },
    {
        "name": "Jane Smith",
        "roll_number": "1002",
        "price":"106 ₹",
        "city": "Los Angeles"
    },
    {
        "name": "Michael Johnson",
        "roll_number": "1003",
        "price":"105 ₹",
        "city": "Chicago"
    },
    {
        "name": "Emily Davis",
        "roll_number": "1004",
        "price":"104 ₹",
        "city": "Houston"
    },
    {
        "name": "William Brown",
        "roll_number": "1005",
        "price":"103 ₹",
        "city": "Phoenix"
    },
    {
        "name": "Jessica Williams",
        "roll_number": "1006",
        "price":"12 ₹",
        "city": "Philadelphia"
    },
    {
        "name": "Daniel Jones",
        "roll_number": "1007",
        "price":"122 ₹",
        "city": "San Antonio"
    },
    {
        "name": "Sarah Miller",
        "roll_number": "1008",
        "price":"132 ₹",
        "city": "San Diego"
    },
    {
        "name": "David Wilson",
        "roll_number": "1009",
        "price":"129 ₹",
        "city": "Dallas"
    },
    {
        "name": "Laura Moore",
        "roll_number": "1010",
        "price":"130 ₹",
        "city": "San Jose"
    }
]


export function getInvoices(){
    return Data;
}

export function getInvoice(roll_number){
    return Data.find(Invoice=>Invoice.roll_number== roll_number)
}