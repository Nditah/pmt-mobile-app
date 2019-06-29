import { toObjectId, DATABASE } from "../../helpers";

const table = [
    { name: "Aba", abbreviation: "AB", state_id: '1', country_iso2: "ng", id: '', created_by: '' },
    { name: "Abakaliki", abbreviation: "AK", state_id: '11', country_iso2: "ng", id: '', created_by: '' },
    { name: "Abuja", abbreviation: "AJ", state_id: '15', country_iso2: "ng", id: '', created_by: '' },
    { name: "Afikpo", abbreviation: "AF", state_id: '11', country_iso2: "ng", id: '', created_by: '' },
    { name: "Akure", abbreviation: "AR", state_id: '29', country_iso2: "ng", id: '', created_by: '' },
    { name: "Asaba", abbreviation: "AS", state_id: '10', country_iso2: "ng", id: '', created_by: '' },
    { name: "Awka", abbreviation: "AW", state_id: '4', country_iso2: "ng", id: '', created_by: '' },
    { name: "Benin", abbreviation: "BN", state_id: '12', country_iso2: "ng", id: '', created_by: '' },
    { name: "Calabar", abbreviation: "CB", state_id: '9', country_iso2: "ng", id: '', created_by: '' },
    { name: "Ekiti", abbreviation: "EK", state_id: '12', country_iso2: "ng", id: '', created_by: '' },
    { name: "Enugu", abbreviation: "EN", state_id: '14', country_iso2: "ng", id: '', created_by: '' },
    { name: "Enugu Ezike", abbreviation: "EZ", state_id: '14', country_iso2: "ng", id: '', created_by: '' },
    { name: "Ibadan", abbreviation: "ID", state_id: '30', country_iso2: "ng", id: '', created_by: '' },
    { name: "Ibafo", abbreviation: "IF", state_id: '28', country_iso2: "ng", id: '', created_by: '' },
    { name: "Ikom", abbreviation: "IK", state_id: '9', country_iso2: "ng", id: '', created_by: '' },
    { name: "Ilorin", abbreviation: "IR", state_id: '24', country_iso2: "ng", id: '', created_by: '' },
    { name: "Jos", abbreviation: "JS", state_id: '32', country_iso2: "ng", id: '', created_by: '' },
    { name: "Kaduna", abbreviation: "KD", state_id: '19', country_iso2: "ng", id: '', created_by: '' },
    { name: "Kano", abbreviation: "KN", state_id: '20', country_iso2: "ng", id: '', created_by: '' },
    { name: "Katsina", abbreviation: "KS", state_id: '21', country_iso2: "ng", id: '', created_by: '' },
    { name: "Lagos", abbreviation: "LG", state_id: '25', country_iso2: "ng", id: '', created_by: '' },
    { name: "Mararaba", abbreviation: "MR", state_id: '26', country_iso2: "ng", id: '', created_by: '' },
    { name: "Minna", abbreviation: "MN", state_id: '27', country_iso2: "ng", id: '', created_by: '' },
    { name: "Nnewi", abbreviation: "NW", state_id: '4', country_iso2: "ng", id: '', created_by: '' },
    { name: "Nsukka", abbreviation: "NK", state_id: '14', country_iso2: "ng", id: '', created_by: '' },
    { name: "Obollo Afor", abbreviation: "", state_id: '14', country_iso2: "ng", id: '', created_by: '' },
    { name: "Onitsha", abbreviation: "", state_id: '4', country_iso2: "ng", id: '', created_by: '' },
    { name: "Owerri", abbreviation: "", state_id: '17', country_iso2: "ng", id: '', created_by: '' },
    { name: "Port Harcourt", abbreviation: "", state_id: '33', country_iso2: "ng", id: '', created_by: '' },
    { name: "Suleja", abbreviation: "", state_id: '27', country_iso2: "ng", id: '', created_by: '' },
    { name: "Umuahia", abbreviation: "", state_id: '1', country_iso2: "ng", id: '', created_by: '' },
    { name: "Uyo", abbreviation: "", state_id: '3', country_iso2: "ng", id: '', created_by: '' },
    { name: "Warri", abbreviation: "", state_id: '10', country_iso2: "ng", id: '', created_by: '' },
    { name: "Yenagoa", abbreviation: "", state_id: '6', country_iso2: "ng", id: '', created_by: '' },
];

const stateBaseId = DATABASE.BASE_ID.STATE;
const staffBaseId = DATABASE.BASE_ID.STAFF;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj.id = toObjectId(stateBaseId, 1 + index);
    obj.state_id = toObjectId(stateBaseId, record.state_id);
    obj.created_by = toObjectId(staffBaseId, 1);
    return obj;
});

export default result;
