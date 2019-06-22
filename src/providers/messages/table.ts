const table = [
    {
        "receive_status": "UNREAD",
        "sent_status": "DRAFT",
        "sender": "STAFF",
        "recipient": "DRIVER",
        "driver_id": {
            "surname": "UGWU",
            "other_name": "EZIKEL KENNETH",
            "id": "5b51bc91860d8b5bb0000010"
        },
        "subject": "Welcome",
        "body": `Thank you for download PMT Driver App.
                This app helps you keep track of your trip and waybill details.
                It also help you monitor your Driver-To-Owner (DTO) Scheme progress.
                `,
        "created_by": null,
        "box": "INBOX",
        "created_at": "2019-06-12T14:40:29.951Z",
        "updated_at": "2019-06-12T14:40:29.951Z",
        "id": "5d010edd15c34bbf844c2932"
    },
];

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    // obj.vehicle_id.description = "Vehicle description";
    return obj;
});

export default result;
