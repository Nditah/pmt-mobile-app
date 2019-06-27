import { toObjectId, DATABASE } from "../../helpers";


const table = [
//    { flw_subaccount_id: "", name: "Enugu, Emene", quarter: "Emene", county_id: 247, city_id: 11, state_id: 14, address: "No. 8-12 Peace Factory Road, Emene Industrial Layout, Enugu", longitude: 6.4628320, latitude: 7.5528820, capacity: 10000, is_pmt_operational: false, is_pml_operational: false, is_pmt_online: false },
    { flw_subaccount_id: "297", name: "Aba", quarter: "Asa Road", manager: "Aba Manager", phone: "08055091828", county_id: 1, city_id: 1, state_id: 1, address: "No 13-14 Asa Road, Aba, Abia State", longitude: 7.3655000, latitude: 5.1050000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "299", name: "Umuahia", quarter: "Crowther Street", manager: "Umuahia Manager", phone: "08055091821", county_id: 0, city_id: 31, state_id: 1, address: "No 2 Crowther Street, Umuahia, Abia State", longitude: 7.4941000, latitude: 5.5320000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "330", name: "Uyo", quarter: "Long Distance Park", county_id: 0, city_id: 32, state_id: 3, address: "Peace Mass Transit Ltd, Terminal 6, Long Distance Park, Itam, Itu Lga , Uyo, Akwa Ibom", longitude: 7.9128000, latitude: 5.0377000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "292", name: "Onitsha, Owerri Rd", quarter: "Owerri Road", county_id: 0, city_id: 27, state_id: 4, address: "No 1b, By Tarzan, Owerri Road, Onitsha, Anambra", longitude: 6.7924000, latitude: 6.1194000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "302", name: "Onitsha, Oguta", quarter: "Oguta Road", manager: "Onitsha Manager", phone: "08055091818", county_id: 0, city_id: 27, state_id: 4, address: "No 103 Oguta Road, Upper Iweka, Onitsha, Anambra", longitude: 6.8029000, latitude: 6.1413000, capacity: 10, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "295", name: "Awka", quarter: "Awka", county_id: 71, city_id: 27, state_id: 4, address: "Unizik Junction, Awka, Anambra State.", longitude: 0.0000000, latitude: 0.0000000, capacity: 0, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "307", name: "Calabar", quarter: "Bedwell Street", manager: "Calabar Manager", phone: "08055091834", county_id: 0, city_id: 9, state_id: 9, address: "No 56 Bedwell Street, Behind Watt Market, Calabar, Akwa Ibom", longitude: 8.3417000, latitude: 4.9757000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "306", name: "Warri", quarter: "Warri-Sapele Road", manager: "Warri Manager", phone: "08056697041", county_id: 0, city_id: 33, state_id: 10, address: "No 118 Warri-Sapele Road, By Airport Junction, Warri", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "328", name: "Afikpo", quarter: "Ngodo Road", county_id: 202, city_id: 4, state_id: 11, address: "No 7 Ngodo Road, Amangballa, Afikpo-North", longitude: 7.9538000, latitude: 5.8895000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "329", name: "Abakaliki", quarter: "Afikpo Road", county_id: 0, city_id: 2, state_id: 11, address: "No 25A, Afikpo Road, Abakaliki", longitude: 8.1013000, latitude: 6.3074000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "308", name: "Benin", quarter: "Akpakpava Road", manager: "Benin Manager", phone: "08059041620", county_id: 0, city_id: 8, state_id: 12, address: "No 115 Akpakpava Road, 2nd Junction, Benin City", longitude: 5.6364000, latitude: 6.3445000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "301", name: "Enugu, Abakpa", quarter: "Abakpa", manager: "Abakpa Manager", phone: "08056697088", county_id: 0, city_id: 11, state_id: 14, address: "Liberty Junction, By Oqwuago-obinagu Road, Abakpa Nike, Enugu.", longitude: 7.5234000, latitude: 6.5182000, capacity: 42, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "", name: "Enugu, Garriki", quarter: "Garriki Market", county_id: 0, city_id: 11, state_id: 14, address: "Opposite Garriki Market, Garriki, Enugu,", longitude: 7.5464000, latitude: 6.4584000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "303", name: "Enugu, Okpara Avenue", quarter: "Okpara Avenue", manager: "Enugu Manager", phone: "08055091825", county_id: 0, city_id: 11, state_id: 14, address: "No 6 Okpara Avenue, Enugu,", longitude: 7.4860000, latitude: 6.4382000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "296", name: "Enugu-Ezike", quarter: "Umuida Rd, Ogurut", manager: "Enugu-Ezike Manager", phone: "08055091832", county_id: 0, city_id: 12, state_id: 14, address: "No 66 Umuida Road, Ogurute, Enugu-Ezike, Enugu", longitude: 7.4425000, latitude: 6.9833000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "333", name: "Abuja, Gwagwalada", quarter: "Gwagwalada", manager: "Akor james", phone: "08055091833", county_id: 0, city_id: 3, state_id: 15, address: "Along Abuja-lokoja Expressway, Opposite Brifina Hotel, Tagiri, Gwagwalada, Abuja.", longitude: 7.0767000, latitude: 8.9508000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "316", name: "Abuja, Kuje", quarter: "Kuje", manager: "Nweke Celestine", phone: "08055091858", county_id: 0, city_id: 3, state_id: 15, address: "Gwagwalada Road, Near Secretariat Junction, Kuje, Abuja.", longitude: 7.2437000, latitude: 8.8764000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "321", name: "Abuja, Zuba", quarter: "Zuba", manager: "Okpe Uchenna", phone: "08055091831", county_id: 0, city_id: 3, state_id: 15, address: "Near Fruit Market, Zuba, Abuja", longitude: 7.3986000, latitude: 9.0765000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "320", name: "Abuja, Kubwa", quarter: "Kubwa", manager: "Kubwa Manager", phone: "08055091830", county_id: 0, city_id: 3, state_id: 15, address: "Opposite Kubwa Market, Kubwa, Abuja,", longitude: 7.3386000, latitude: 9.1596000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "332", name: "Abuja, Utako", quarter: "Utako", county_id: 0, city_id: 3, state_id: 15, address: "39 Ajose Adeogun Street, Utako, Fct,  Abuja", longitude: 7.4400000, latitude: 9.0683000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "314", name: "Abuja, Bwari", quarter: "Bwari", manager: "Bwari Manager", phone: "08056697034", county_id: 0, city_id: 3, state_id: 15, address: "9 Shagari Road, Opposite Market, Bwarri, Abuja", longitude: 7.3787000, latitude: 9.2856000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "292", name: "Owerri", quarter: "Orji", manager: "Owerri Manager", phone: "08055091824", county_id: 0, city_id: 28, state_id: 17, address: "No 1 Living Christ Mission Avenue, Orji, Owerri, Imo State", longitude: 7.0633000, latitude: 5.5276000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "", name: "Kano, Koka", quarter: "First Gate, Tesha K", county_id: 0, city_id: 19, state_id: 20, address: "First Gate, Tesha Koka, Kofar Ruwa Market, Kano", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "", name: "Katsina", quarter: "No 96 Ibb Way", county_id: 0, city_id: 20, state_id: 21, address: "No 96 Ibb Way, Katsina,", longitude: 7.6205000, latitude: 12.9696000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "282", name: "Ilorin", quarter: "Old Jebba Road", manager: "Illorin Manager", phone: "08055091849", county_id: 0, city_id: 16, state_id: 24, address: "Old Jebba Road, Agric Area, Opposite Kwara Adp, Along Sango Road, Ilorin, Kwara", longitude: 4.5852000, latitude: 8.5089000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "276", name: "Lagos, Mazamaza", quarter: "Mazamaza", county_id: 0, city_id: 21, state_id: 25, address: "Mazamaza by Oduma Giofor Car Dealers Association, Lagos", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "278", name: "Lagos, Ojuelegba", quarter: "Ojuelegba", manager: "Ojuelegba Manager", phone: "08055091827", county_id: 0, city_id: 21, state_id: 25, address: "9-10 Western Avenue, Ojuelegba Roundabout, Opposite Abalti Barracks, Lagos,", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "291", name: "Lagos, Demorose", quarter: "Demorose", manager: "Demorose Manager", phone: "08056697004", county_id: 0, city_id: 21, state_id: 25, address: "No 106, Demorose, Near Agboju Market, Church Bus-stop, Old Ojo Road, Lagos", longitude: 3.2748000, latitude: 6.4568000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "287", name: "Lagos, Orile", quarter: "Orile", county_id: 0, city_id: 21, state_id: 25, address: "No 10 Badagry Expressway, By School Bus Stop, Orile, Lagos", longitude: 3.3792000, latitude: 6.5244000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "288", name: "Lagos, Ajegunle", quarter: "Ajegunle", manager: "Ajegunle Manager", phone: "08056697070", county_id: 0, city_id: 21, state_id: 25, address: "6 Achakpo Street, Off Mba Street, Ajegunle, Lagos", longitude: 3.3376000, latitude: 6.4554000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "290", name: "Lagos, Ikorodu", quarter: "Ikorodu", manager: "Ikorodu Manager", phone: "08056697002", county_id: 0, city_id: 21, state_id: 25, address: "7 Sagamu Road, By Ikorodu Roundabout, Ikorodu, Lagos", longitude: 3.5105000, latitude: 6.6194000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "327", name: "Lagos, Oshodi", quarter: "Oshodi", county_id: 0, city_id: 21, state_id: 25, address: "Charity Bus Stop, Opposite Army Resettlement Centre, Oshodi, Lagos,", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "285", name: "Lagos, Ejigbo", quarter: "Ejigbo", county_id: 0, city_id: 21, state_id: 25, address: "Ilepo Bus Stop, Ejigbo, Lagos,", longitude: 3.3036000, latitude: 6.5302000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "315", name: "Abuja, Mararaba", quarter: "Mararaba", manager: "Patience Ozuluigbo", phone: "08055091822", county_id: 0, city_id: 3, state_id: 26, address: "By Last Bus Stop, Keffi Road, Mararaba, Nassarawa,", longitude: 8.3088000, latitude: 8.5705000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "286", name: "Lagos, Ibafo", quarter: "Ibafo", manager: "Ibafo Manager", phone: "08056697049", county_id: 0, city_id: 21, state_id: 28, address: "Near Ibafo Police Station, Opposite Internal Revenue, Ibafo, Ogun State.", longitude: 3.4221000, latitude: 6.7401000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "283", name: "Akure", quarter: "Ife-Ibadan Express", manager: "Akure Manager", phone: "08056697069", county_id: 0, city_id: 5, state_id: 29, address: "Ife-ibadan Expressway Road Block, Along Efe Road Opposite Swan Hotel, Akure, Ondo", longitude: 5.2058000, latitude: 7.2571000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "279", name: "Ibadan", quarter: "UI Sango Rd", manager: "Ibadan Manager", phone: "08055091851", county_id: 0, city_id: 13, state_id: 31, address: "Samonda Old Airport, Ui-sango Rd, Ibadan, Oyo State.", longitude: 3.9070000, latitude: 7.4492000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "310", name: "Port-Harcourt", quarter: "No 233 Aba Road", manager: "PortHarcourt Manager", phone: "08055091820", county_id: 0, city_id: 29, state_id: 33, address: "No 233 Aba Road, Opposite Bori Camp Military Barracks, Rumola, Port-Harcourt, Rivers", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "304", name: "Nsukka", quarter: "Enugu Road", manager: "Nsukka Manager", phone: "08055091817", county_id: 0, city_id: 25, state_id: 14, address: "64 Enugu Road, Nsukka", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "280", name: "Lagos, Ajah", quarter: "Ajah", county_id: 0, city_id: 21, state_id: 25, address: "Ajiwe, opposite Michael & Solomon house", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "361", name: "Lagos, Oyingbo", quarter: "Oyingbo", county_id: 0, city_id: 21, state_id: 25, address: "Oyingbbo, Lagos", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "293", name: "Obollo Afor", quarter: "Markurdi Express Rd.", manager: "Obollo-Afor Manager", phone: "08055091819", county_id: 257, city_id: 26, state_id: 14, address: "Along Markurdi Express Road, Obollo Afor", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "311", name: "Yenagoa", quarter: "Okutukutu, Mabiama", manager: "Yenegoa Manager", phone: "08055091855", county_id: 0, city_id: 34, state_id: 6, address: "783 Okutukutu, Mabiama, Yenagoa, Bayelsa State", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "", name: "Enugu, 9th Mile", quarter: "9th Mile", county_id: 0, city_id: 11, state_id: 14, address: "Kuje, Abuja", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "319", name: "Minna", quarter: "David-Mark Road", manager: "Odo Fimber", phone: "08056697027", county_id: 0, city_id: 23, state_id: 27, address: "David Mark Road, Opposite INEC office, Tudun Wada North, Minna, Nassarawa", longitude: 0.0000000, latitude: 0.0000000, capacity: 1, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "318", name: "Abuja, Nyanya", quarter: "Nyanya", county_id: 31, city_id: 3, state_id: 15, address: "Opposit FSP Karu Road Nyanya, Abuja", longitude: 0.0000000, latitude: 0.0000000, capacity: 0, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "294", name: "Nnewi", quarter: "Nnewi", manager: "Nnewi Manager", phone: "08056697009", county_id: 79, city_id: 24, state_id: 4, address: "4-5 owerri Road by Nwafor Orizu Roundabout, Umudim, Nnewi", longitude: 0.0000000, latitude: 0.0000000, capacity: 0, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "277", name: "Lagos, Jibow", quarter: "Jibow", manager: "Jibowu Manager", phone: "08056697003", county_id: 495, city_id: 21, state_id: 25, address: "7 Ikorodu Road, by Traffic Light Opposit Chrisco, Lagos", longitude: 0.0000000, latitude: 0.0000000, capacity: 0, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "", name: "Ado-Ekiti", quarter: "Ikere Road", county_id: 233, city_id: 10, state_id: 13, address: "Ikere Road, Ado-Ekiti, Ekiti", longitude: 0.0000000, latitude: 0.0000000, capacity: 0, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "289", name: "Lagos, Ojota", quarter: "Ojota", county_id: 495, city_id: 21, state_id: 25, address: "ojota , lagos state", longitude: 0.0000000, latitude: 0.0000000, capacity: 0, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "331", name: "Jos", quarter: "Terminal market", county_id: 636, city_id: 17, state_id: 32, address: "Terminal market, Jos, Plateau State", longitude: 0.0000000, latitude: 0.0000000, capacity: 0, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "312", name: "Asaba", quarter: "Head Bridge", county_id: 127, city_id: 6, state_id: 10, address: "Head-bridge, Asaba, Delta state", longitude: 0.0000000, latitude: 0.0000000, capacity: 0, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "309", name: "Ikom", quarter: "Four Corner", county_id: 170, city_id: 15, state_id: 9, address: "No1 mile2, four-conrner Ikom, Cross River State", longitude: 0.0000000, latitude: 0.0000000, capacity: 0, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: true },
    { flw_subaccount_id: "313", name: "Kaduna", quarter: "Almadu Bello way", county_id: 336, city_id: 18, state_id: 19, address: "Almadu-Bello Way, Kaduna", longitude: 0.0000000, latitude: 0.0000000, capacity: 0, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
    { flw_subaccount_id: "", name: "Suleja", quarter: "IBB Market Rd.", county_id: 534, city_id: 30, state_id: 27, address: "IBB Market Road, Suleja, Niger State", longitude: 0.0000000, latitude: 0.0000000, capacity: 0, is_pmt_operational: true, is_pml_operational: true, is_pmt_online: false },
];

const countyBaseId = DATABASE.BASE_ID.COUNTY;
const stateBaseId = DATABASE.BASE_ID.STATE;
const cityBaseId = DATABASE.BASE_ID.CITY;
const staffBaseId = DATABASE.BASE_ID.STAFF;
const terminalBaseId = DATABASE.BASE_ID.TERMINAL;
const bankAccountBaseId = DATABASE.BASE_ID.BANK_ACCOUNT;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj.id = toObjectId(terminalBaseId, 1 + index);
    if (record.flw_subaccount_id) {
    //    obj.flw_subaccount_id = toObjectId(bankAccountBaseId, record.flw_subaccount_id);
    // } else {
        delete obj.flw_subaccount_id;
    }
    obj.county_id = toObjectId(countyBaseId, record.county_id);
    obj.state_id = toObjectId(stateBaseId, record.state_id);
    obj.city_id = toObjectId(cityBaseId, record.city_id);
    obj.created_by = toObjectId(staffBaseId, record.created_by);
    return obj;
});

export default result;
