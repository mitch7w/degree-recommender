import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyCkTIDtUjOHPgUsp0jjZiQ5q_EhFbXItUc",
    authDomain: "degree-recommender.firebaseapp.com",
    projectId: "degree-recommender",
    storageBucket: "degree-recommender.appspot.com",
    messagingSenderId: "15881084955",
    appId: "1:15881084955:web:72fae7e09ba1496d9e58be",
    measurementId: "G-RXZD2VJXBV"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const degreeCollection = db.collection('degrees');

// export const createDegree = degree => {
//     let originalData = [
//         {
//           "degreeCode": 7130043,
//           "degreeName": "BCom Accounting Sciences",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130043",
//           "tags": "Economics and Finance,Profession,Introverted,Want To Be Rich,Practical,Maths,Accounting"
//         },
//         {
//           "degreeCode": 2133398,
//           "degreeName": "BSc Biochemistry",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133398",
//           "tags": "Agriculture,Science,Genetics,Medicine,Health Sciences,Introverted,Practical,Biology"
//         },
//         {
//           "degreeCode": 2133404,
//           "degreeName": "BSc Microbiology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133404",
//           "tags": "Science,Animals,Medicine,Health Sciences,Marine Environment,Agriculture,Genetics,Biology,Introverted,Good With People,Good With Animals,Practical"
//         },
//         {
//           "degreeCode": 2133410,
//           "degreeName": "BScAgric Agricultural Economics and Agribusiness Management",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133410",
//           "tags": "Science,Animals,Economics and Finance,Marine Environment,Agriculture,Genetics,Biology,Introverted,Good With Animals,Outdoorsy,Adventurous,Practical,Accounting"
//         },
//         {
//           "degreeCode": 7130222,
//           "degreeName": "BCom",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130222",
//           "tags": "People,Marketing,Economics and Finance,Law and Criminology,Profession,Extroverted,Good With People,Patient,Practical,Accounting"
//         },
//         {
//           "degreeCode": 12130002,
//           "degreeName": "BEng Chemical Engineering",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12130002",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Chemistry,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 2133399,
//           "degreeName": "BSc Zoology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133399",
//           "tags": "Science,Animals,Medicine,Health Sciences,Marine Environment,Agriculture,Genetics,Biology,Introverted,Good With People,Good With Animals,Practical,Outdoorsy,Patient,Adventurous"
//         },
//         {
//           "degreeCode": 2133405,
//           "degreeName": "BSc Plant Science",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133405",
//           "tags": "Science,Marine Environment,Agriculture,Genetics,Biology,Introverted,Good With People,Good With Animals,Practical,Outdoorsy,Patient,Adventurous"
//         },
//         {
//           "degreeCode": 7131175,
//           "degreeName": "BAdmin Public Management and International Relations",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07131175",
//           "tags": "History,People,Humanities,Languages,Marketing,Hospitality and Tourism,International Relations,Law and Criminology,Social Work,Politics,Extroverted,Good With People,Patient,Altruistic,Creative"
//         },
//         {
//           "degreeCode": 9133011,
//           "degreeName": "BEd Foundation Phase Teaching",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/09133011",
//           "tags": "People,Humanities,Languages,Education and Teaching,Social Work,Profession,Extroverted,Artistic,Good With People,Patient,Altruistic,Creative,Practical"
//         },
//         {
//           "degreeCode": 2130108,
//           "degreeName": "BConSci Food Retail Management",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02130108",
//           "tags": "Hospitality and Tourism,People,Humanities,Economics and Finance,Management,Introverted,Patient,Practical"
//         },
//         {
//           "degreeCode": 2130109,
//           "degreeName": "BConSci Hospitality Management",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02130109",
//           "tags": "Hospitality and Tourism,People,Humanities,Economics and Finance,Management,Introverted,Patient,Practical"
//         },
//         {
//           "degreeCode": 2133395,
//           "degreeName": "BSc Actuarial and Financial Mathematics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133395",
//           "tags": "Science,Engineering,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Accounting,Management,Maths"
//         },
//         {
//           "degreeCode": 2133253,
//           "degreeName": "BSc Applied Mathematics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133253",
//           "tags": "Science,Engineering,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Accounting,Management,Maths"
//         },
//         {
//           "degreeCode": 9133031,
//           "degreeName": "BEd Senior Phase and Further Education and Training Teaching",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/09133031",
//           "tags": "People,Humanities,Languages,Education and Teaching,Social Work,Profession,Extroverted,Artistic,Good With People,Patient,Altruistic,Creative,Practical"
//         },
//         {
//           "degreeCode": 9133021,
//           "degreeName": "BEd Intermediate Phase Teaching",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/09133021",
//           "tags": "People,Humanities,Languages,Education and Teaching,Social Work,Profession,Extroverted,Artistic,Good With People,Patient,Altruistic,Creative,Practical"
//         },
//         {
//           "degreeCode": 8130006,
//           "degreeName": "BVetNurs",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/08130006",
//           "tags": "Science,Animals,Medicine,Health Sciences,Agriculture,Genetics,Biology,Chemistry,Introverted,Good With Animals,Outdoorsy,Want To Be Rich,Altruistic,Adventurous,Practical"
//         },
//         {
//           "degreeCode": 8130005,
//           "degreeName": "BVSc",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/08130005",
//           "tags": "Science,Animals,Medicine,Health Sciences,Agriculture,Genetics,Biology,Chemistry,Introverted,Good With Animals,Outdoorsy,Want To Be Rich,Altruistic,Adventurous,Practical"
//         },
//         {
//           "degreeCode": 6130008,
//           "degreeName": "BDiv",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/06130008",
//           "tags": "History,People,Art,Humanities,Languages,International Relations,Social Work,Politics,Extroverted,Good With People,Creative"
//         },
//         {
//           "degreeCode": 6130007,
//           "degreeName": "BTh",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/06130007",
//           "tags": "History,People,Art,Humanities,Languages,International Relations,Social Work,Politics,Extroverted,Good With People,Creative"
//         },
//         {
//           "degreeCode": 10130003,
//           "degreeName": "MBChB",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/10130003",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Masochistic,Good With People,Patient,Want To Be Rich,Altruistic,Practical,Adventurous,Maths"
//         },
//         {
//           "degreeCode": 10138103,
//           "degreeName": "BPhysT",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/10138103",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Masochistic,Good With People,Patient,Want To Be Rich,Altruistic,Practical,Adventurous,Maths"
//         },
//         {
//           "degreeCode": 10138003,
//           "degreeName": "BOT",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/10138003",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Masochistic,Good With People,Patient,Want To Be Rich,Altruistic,Practical,Adventurous,Maths"
//         },
//         {
//           "degreeCode": 10137100,
//           "degreeName": "BRad in Diagnostics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/10137100",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical"
//         },
//         {
//           "degreeCode": 10135010,
//           "degreeName": "BSportSci",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/10135010",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical,Outdoorsy,Adventurous"
//         },
//         {
//           "degreeCode": 10132001,
//           "degreeName": "BOH",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/10132001",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Masochistic,Good With People,Patient,Want To Be Rich,Altruistic,Practical,Adventurous,Maths"
//         },
//         {
//           "degreeCode": 2133411,
//           "degreeName": "BScAgric Animal Science",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133411",
//           "tags": "Science,Animals,Medicine,Health Sciences,Agriculture,Genetics,Biology,Chemistry,Introverted,Good With Animals,Outdoorsy,Altruistic,Adventurous,Practical"
//         },
//         {
//           "degreeCode": 2133431,
//           "degreeName": "BScAgric Applied Plant and Soil Sciences",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133431",
//           "tags": "Science,Animals,Economics and Finance,Marine Environment,Agriculture,Genetics,Biology,Introverted,Outdoorsy,Adventurous,Practical,Accounting,Management"
//         },
//         {
//           "degreeCode": 2133433,
//           "degreeName": "BScAgric Plant Pathology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133433",
//           "tags": "Science,Animals,Economics and Finance,Marine Environment,Agriculture,Genetics,Biology,Introverted,Outdoorsy,Adventurous,Practical,Accounting,Management"
//         },
//         {
//           "degreeCode": 4130012,
//           "degreeName": "LLB",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/04130012",
//           "tags": "History,People,Humanities,Languages,Economics and Finance,International Relations,Law and Criminology,Profession,Politics,Management,Extroverted,Good With People,Patient,Want To Be Rich,Practical"
//         },
//         {
//           "degreeCode": 10130012,
//           "degreeName": "BCMP",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/10130012",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical"
//         },
//         {
//           "degreeCode": 10136001,
//           "degreeName": "BChD",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/10136001",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical,Want To Be Rich"
//         },
//         {
//           "degreeCode": 10139003,
//           "degreeName": "BDietetics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/10139003",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical"
//         },
//         {
//           "degreeCode": 10131002,
//           "degreeName": "BNurs",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/10131002",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical"
//         },
//         {
//           "degreeCode": 12136002,
//           "degreeName": "BEng Chemical Engineering ENGAGE",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12136002",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Chemistry,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 2133203,
//           "degreeName": "BSc Physics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133203",
//           "tags": "Science,Engineering,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths,Practical"
//         },
//         {
//           "degreeCode": 2133322,
//           "degreeName": "BSc Nutrition",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133322",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical"
//         },
//         {
//           "degreeCode": 2133274,
//           "degreeName": "BSc Mathematical Statistics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133274",
//           "tags": "Science,Engineering,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Accounting,Management,Maths"
//         },
//         {
//           "degreeCode": 2133313,
//           "degreeName": "BSc Meteorology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133313",
//           "tags": "Science,Engineering,Profession,Introverted,Masochistic,Patient,Practical,Accounting,Management,Maths,Agriculture,Outdoorsy"
//         },
//         {
//           "degreeCode": 2133407,
//           "degreeName": "BSc Medical Sciences",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133407",
//           "tags": "Science,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Masochistic,Good With People,Patient,Altruistic,Practical,Maths"
//         },
//         {
//           "degreeCode": 2133263,
//           "degreeName": "BSc Mathematics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133263",
//           "tags": "Science,Engineering,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Accounting,Management,Maths"
//         },
//         {
//           "degreeCode": 12130006,
//           "degreeName": "BEng Mining Engineering",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12130006",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Outdoorsy,Adventurous,Maths"
//         },
//         {
//           "degreeCode": 12136005,
//           "degreeName": "BEng Metallurgical Engineering ENGAGE",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12136005",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12130005,
//           "degreeName": "BEng Metallurgical Engineering",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12130005",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12136004,
//           "degreeName": "BEng Mechanical Engineering ENGAGE",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12136004",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12130004,
//           "degreeName": "BEng Mechanical Engineering",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12130004",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12136001,
//           "degreeName": "BEng Industrial Engineering ENGAGE",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12136001",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12130008,
//           "degreeName": "BEng Electronic Engineering",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12130008",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 2133396,
//           "degreeName": "BSc Human Physiology,Genetics and Psychology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133396",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Altruistic,"
//         },
//         {
//           "degreeCode": 2133408,
//           "degreeName": "BSc Human Physiology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133408",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Altruistic,"
//         },
//         {
//           "degreeCode": 2133023,
//           "degreeName": "BSc Geology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133023",
//           "tags": "Science,History,Engineering,Humanities,Architecture and Building,Profession,Management,Introverted,Outdoorsy,Patient,Creative,Adventurous,Practical"
//         },
//         {
//           "degreeCode": 2133409,
//           "degreeName": "BSc Human Genetics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133409",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Altruistic"
//         },
//         {
//           "degreeCode": 2133393,
//           "degreeName": "BSc Geoinformatics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133393",
//           "tags": "Science,History,Engineering,Humanities,Architecture and Building,Profession,Management,Introverted,Outdoorsy,Patient,Creative,Adventurous,Practical,Maths,Accounting"
//         },
//         {
//           "degreeCode": 2133402,
//           "degreeName": "BSc Genetics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133402",
//           "tags": "Science,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Engineering"
//         },
//         {
//           "degreeCode": 2133363,
//           "degreeName": "BSc Geography and Environmental Science",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133363",
//           "tags": "Science,History,Engineering,Humanities,Architecture and Building,Profession,Management,Introverted,Outdoorsy,Patient,Creative,Adventurous,Practical,Maths"
//         },
//         {
//           "degreeCode": 2133406,
//           "degreeName": "BSc Food Science",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133406",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical"
//         },
//         {
//           "degreeCode": 2130015,
//           "degreeName": "BSc extended programme - Physical Sciences",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02130015",
//           "tags": "Science,Profession,Introverted,Masochistic,Patient,Practical,Maths"
//         },
//         {
//           "degreeCode": 2130016,
//           "degreeName": "BSc extended programme - Mathematical Sciences",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02130016",
//           "tags": "Science,Engineering,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Accounting,Management,Maths"
//         },
//         {
//           "degreeCode": 2130014,
//           "degreeName": "BSc extended programme - Biological and Agricultural Sciences",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02130014",
//           "tags": "Science,Economics and Finance,Marine Environment,Agriculture,Genetics,Biology,Introverted,Good With Animals,Outdoorsy,Adventurous,Practical"
//         },
//         {
//           "degreeCode": 2133043,
//           "degreeName": "BSc Engineering and Environmental Geology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133043",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths,Outdoorsy"
//         },
//         {
//           "degreeCode": 2133401,
//           "degreeName": "BSc Entomology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133401",
//           "tags": "Science,Animals,Medicine,Marine Environment,Agriculture,Genetics,Biology,Introverted,Good With People,Good With Animals,Practical,Outdoorsy,Patient,Adventurous"
//         },
//         {
//           "degreeCode": 1130144,
//           "degreeName": "BSW",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130144",
//           "tags": "History,People,Humanities,Languages,International Relations,Law and Criminology,Politics,Extroverted,Good With People,Patient,Social Work"
//         },
//         {
//           "degreeCode": 2133400,
//           "degreeName": "BSc Ecology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133400",
//           "tags": "Science,Animals,Medicine,Health Sciences,Marine Environment,Agriculture,Genetics,Biology,Introverted,Good With People,Good With Animals,Practical,Outdoorsy,Patient,Adventurous"
//         },
//         {
//           "degreeCode": 2133320,
//           "degreeName": "BSc Culinary Science",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133320",
//           "tags": "Science,People,Medicine,Health Sciences,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical"
//         },
//         {
//           "degreeCode": 2133173,
//           "degreeName": "BSc Chemistry",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133173",
//           "tags": "Science,People,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical,Introverted"
//         },
//         {
//           "degreeCode": 2133403,
//           "degreeName": "BSc Biotechnology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133403",
//           "tags": "Science,People,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical,Introverted"
//         },
//         {
//           "degreeCode": 2133397,
//           "degreeName": "BSc Biological Sciences",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02133397",
//           "tags": "Science,People,Profession,Genetics,Biology,Chemistry,Extroverted,Good With People,Patient,Altruistic,Practical,Introverted"
//         },
//         {
//           "degreeCode": 1130056,
//           "degreeName": "BSocSci Philosophy,Politics and Economics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130056",
//           "tags": "History,People,Humanities,International Relations,Law and Criminology,Social Work,Politics,Extroverted,Good With People,Patient,Altruistic,Economics and Finance"
//         },
//         {
//           "degreeCode": 1130064,
//           "degreeName": "BSocSci Industrial Sociology and Labour Studies",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130064",
//           "tags": "History,People,Humanities,International Relations,Law and Criminology,Social Work,Politics,Extroverted,Good With People,Patient,Altruistic,Economics and Finance"
//         },
//         {
//           "degreeCode": 1130068,
//           "degreeName": "BSocSci Heritage and Cultural Tourism",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130068",
//           "tags": "History,People,Humanities,Languages,Marketing,Hospitality and Tourism,Law and Criminology,Social Work,Politics,Extroverted,Good With People,Patient,Altruistic,Creative"
//         },
//         {
//           "degreeCode": 12132023,
//           "degreeName": "BSc Quantity Surveying",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12132023",
//           "tags": "Science,Engineering,Art,Architecture and Building,Design,Profession,Management,Introverted,Outdoorsy,Creative,Adventurous,Practical"
//         },
//         {
//           "degreeCode": 1130039,
//           "degreeName": "BPolSci Political Studies",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130039",
//           "tags": "History,People,Humanities,Languages,Marketing,International Relations,Law and Criminology,Social Work,Politics,Extroverted,Good With People,Patient,Altruistic,Creative"
//         },
//         {
//           "degreeCode": 1130038,
//           "degreeName": "BPolSci International Studies",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130038",
//           "tags": "History,People,Humanities,Languages,Marketing,International Relations,Law and Criminology,Social Work,Politics,Extroverted,Good With People,Patient,Altruistic"
//         },
//         {
//           "degreeCode": 1132004,
//           "degreeName": "BMus extended programme",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01132004",
//           "tags": "History,Art,Humanities,People,Music,Artistic,Creative,Design"
//         },
//         {
//           "degreeCode": 1132003,
//           "degreeName": "BMus",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01132003",
//           "tags": "History,Art,Humanities,People,Music,Artistic,Creative,Design"
//         },
//         {
//           "degreeCode": 1130117,
//           "degreeName": "BDram",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130117",
//           "tags": "History,Art,Humanities,People Extroverted,Artistic,Creative,Design"
//         },
//         {
//           "degreeCode": 1130133,
//           "degreeName": "BA Visual Studies",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130133",
//           "tags": "History,Art,Humanities,People,Music,Artistic,Creative,Introverted,Design"
//         },
//         {
//           "degreeCode": 1130104,
//           "degreeName": "BA Speech-Language Pathology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130104",
//           "tags": "Science,People,Medicine,Health Sciences,Education and Teaching,Biology,Good With People,Patient,Altruistic"
//         },
//         {
//           "degreeCode": 1130086,
//           "degreeName": "BA Law",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130086",
//           "tags": "History,People,Humanities,Languages,Economics and Finance,International Relations,Law and Criminology,Profession,Politics,Management,Extroverted,Good With People,Patient,Want To Be Rich,Practical"
//         },
//         {
//           "degreeCode": 1130016,
//           "degreeName": "BA Languages",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130016",
//           "tags": "History,People,Art,Humanities,Languages,Creative"
//         },
//         {
//           "degreeCode": 1130102,
//           "degreeName": "BA Information Design",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130102",
//           "tags": "Management,Marketing,Art,Humanities,Languages,Design,Artistic,Creative"
//         },
//         {
//           "degreeCode": 1130103,
//           "degreeName": "BA Fine Arts",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130103",
//           "tags": "History,Art,Humanities,People,Music,Artistic,Creative"
//         },
//         {
//           "degreeCode": 1130014,
//           "degreeName": "BA extended programme",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130014",
//           "tags": "History,People,Art,Humanities,Languages,Creative"
//         },
//         {
//           "degreeCode": 1130105,
//           "degreeName": "BA Audiology",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130105",
//           "tags": "Science,People,Medicine,Health Sciences,Education and Teaching,Biology,Good With People,Patient,Altruistic,Chemistry"
//         },
//         {
//           "degreeCode": 1130015,
//           "degreeName": "BA",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/01130015",
//           "tags": "History,People,Art,Humanities,Languages,Creative"
//         },
//         {
//           "degreeCode": 12132026,
//           "degreeName": "BTRP",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12132026",
//           "tags": "Art,Humanities,Architecture and Building,Design,Artistic,Outdoorsy,Creative"
//         },
//         {
//           "degreeCode": 2130110,
//           "degreeName": "BConSci Clothing Retail Management",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/02130110",
//           "tags": "People,Management,Marketing,Humanities,Design,Artistic,Creative"
//         },
//         {
//           "degreeCode": 12130001,
//           "degreeName": "BEng Industrial Engineering",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12130001",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12136008,
//           "degreeName": "BEng Electronic Engineering ENGAGE",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12136008",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12136003,
//           "degreeName": "BEng Electrical Engineering ENGAGE",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12136003",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12130003,
//           "degreeName": "BEng Electrical Engineering",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12130003",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12136009,
//           "degreeName": "BEng Computer Engineering ENGAGE",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12136009",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12130009,
//           "degreeName": "BEng Computer Engineering",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12130009",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical"
//         },
//         {
//           "degreeCode": 12136007,
//           "degreeName": "BEng Civil Engineering ENGAGE",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12136007",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Outdoorsy,Adventurous,Maths"
//         },
//         {
//           "degreeCode": 12130007,
//           "degreeName": "BEng Civil Engineering",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12130007",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Outdoorsy,Adventurous,Maths"
//         },
//         {
//           "degreeCode": 7130067,
//           "degreeName": "BCom Supply Chain Management",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130067",
//           "tags": "People,Economics and Finance,Profession,Extroverted,Good With People,Patient,Practical,Accounting,Maths"
//         },
//         {
//           "degreeCode": 7130263,
//           "degreeName": "BCom Statistics and Data Science",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130263",
//           "tags": "People,Science,Economics and Finance,Profession,Extroverted,Good With People,Patient,Practical,Accounting,Maths,Technology and Electronics"
//         },
//         {
//           "degreeCode": 7130162,
//           "degreeName": "BCom Marketing Management",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130162",
//           "tags": "People,Marketing,Economics and Finance,Profession,Extroverted,Good With People,Patient,Practical,Accounting,Maths,Technology and Electronics"
//         },
//         {
//           "degreeCode": 7130152,
//           "degreeName": "BCom Law",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130152",
//           "tags": "History,People,Humanities,Languages,Economics and Finance,International Relations,Law and Criminology,Profession,Politics,Management,Extroverted,Good With People,Patient,Practical"
//         },
//         {
//           "degreeCode": 7130205,
//           "degreeName": "BCom Investment Management",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130205",
//           "tags": "People,Humanities,Economics and Finance,Management,Extroverted,Patient,Want To Be Rich"
//         },
//         {
//           "degreeCode": 7130173,
//           "degreeName": "BCom Informatics Information Systems",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130173",
//           "tags": "Science,Engineering,Humanities,Profession,Management,Introverted,Patient,Creative,Maths,Accounting"
//         },
//         {
//           "degreeCode": 7130144,
//           "degreeName": "BCom Human Resource Management",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130144",
//           "tags": "People,Humanities,Languages,International Relations,Law and Criminology,Politics,Extroverted,Good With People,Patient,Social Work"
//         },
//         {
//           "degreeCode": 7130206,
//           "degreeName": "BCom Financial Sciences",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130206",
//           "tags": "People,Humanities,Economics and Finance,Management,Extroverted,Patient,Want To Be Rich"
//         },
//         {
//           "degreeCode": 7139923,
//           "degreeName": "BCom extended programme",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07139923",
//           "tags": "People,Marketing,Economics and Finance,Law and Criminology,Profession,Extroverted,Good With People,Patient,Practical,Accounting"
//         },
//         {
//           "degreeCode": 7130052,
//           "degreeName": "BCom Economics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130052",
//           "tags": "People,Humanities,Economics and Finance,Management,Extroverted,Patient,Want To Be Rich"
//         },
//         {
//           "degreeCode": 7130012,
//           "degreeName": "BCom Econometrics",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130012",
//           "tags": "People,Humanities,Economics and Finance,Management,Extroverted,Patient,Want To Be Rich"
//         },
//         {
//           "degreeCode": 7130068,
//           "degreeName": "BCom Business Management",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130068",
//           "tags": "People,Humanities,Economics and Finance,Management,Extroverted,Patient,Want To Be Rich"
//         },
//         {
//           "degreeCode": 7130092,
//           "degreeName": "BCom Agribusiness Management",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/07130092",
//           "tags": "Animals,Economics and Finance,Marine Environment,Agriculture,Biology,Introverted,Good With Animals,Outdoorsy,Adventurous,Practical,Accounting"
//         },
//         {
//           "degreeCode": 12136006,
//           "degreeName": "BEng Mining Engineering ENGAGE",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12136006",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Outdoorsy,Adventurous,Maths"
//         },
//         {
//           "degreeCode": 12131012,
//           "degreeName": "BIS Information Science",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12131012",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12133213,
//           "degreeName": "BSc Information and Knowledge Systems",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12133213",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Patient"
//         },
//         {
//           "degreeCode": 12132025,
//           "degreeName": "BSc Construction Management",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12132025",
//           "tags": "Science,Engineering,Art,Architecture and Building,Design,Profession,Management,Introverted,Outdoorsy,Creative,Adventurous,Practical"
//         },
//         {
//           "degreeCode": 12131014,
//           "degreeName": "BIS Publishing",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12131014",
//           "tags": "People,Humanities,Art,Technology and Electronics,Profession,Introverted,Patient"
//         },
//         {
//           "degreeCode": 12134001,
//           "degreeName": "BSc Computer Science",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12134001",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Masochistic,Patient,Want To Be Rich,Practical,Maths"
//         },
//         {
//           "degreeCode": 12132018,
//           "degreeName": "BSc Architecture",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12132018",
//           "tags": "Science,Engineering,Art,Architecture and Building,Design,Profession,Management,Introverted,Outdoorsy,Creative,Adventurous,Practical,Masochistic,Want To Be Rich"
//         },
//         {
//           "degreeCode": 12133300,
//           "degreeName": "BIT Information Systems",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12133300",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Patient,Maths,Accounting"
//         },
//         {
//           "degreeCode": 12131013,
//           "degreeName": "BIS Multimedia",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12131013",
//           "tags": "Science,People,Engineering,Technology and Electronics,Profession,Introverted,Patient,Art,Music"
//         },
//         {
//           "degreeCode": 12132024,
//           "degreeName": "BSc Real Estate",
//           "link": "https://www.up.ac.za/yearbooks/2021/programmes/view/12132024",
//           "tags": "Art,Architecture and Building,Design,Profession,Management,Introverted,Outdoorsy,Creative,Adventurous,Practical"
//         }
//        ] ;

//     originalData.forEach(data => {
//         let newTagArray = data.tags.split(",");
//         let newDataItem = {
//             "degreeCode": data.degreeCode,
//             "degreeName": data.degreeName,
//             "link": data.link,
//             "tags": newTagArray
//         }
//         // push to FB
//         db.collection("degrees").add(newDataItem);
//     });

// }

// tagList must be comma-separated array
// gets any degrees that have the tags in tagList assigned to them
export const getDegreeList = async tagList => {
    const degreeList = await degreeCollection.where('tags', 'array-contains-any', tagList).get();
    return degreeList;
}