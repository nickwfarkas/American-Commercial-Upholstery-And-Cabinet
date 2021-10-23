var slideOneImage = new Image();
var slideTwoImage = new Image();
var slideThreeImage = new Image();
var slideFourImage = new Image();

slideOneImage = document.getElementById("carousel-slide-image-1");
slideTwoImage = document.getElementById("carousel-slide-image-2");
slideThreeImage = document.getElementById("carousel-slide-image-3");
slideFourImage = document.getElementById("carousel-slide-image-4");

let images = [
    './Gallery/D0BDBDCA-AAAB-4DC6-BCB7-933E11B22865.JPG', './Gallery/A56C1053-545C-4D10-9A19-7211B08BAED4.JPG', './Gallery/B7001978-E0E8-49DE-A707-7153C02CD9F4.JPG',
    './Gallery/4EB1D7DD-3AE1-4225-84B3-893D0B05AF2B.JPG', './Gallery/18DB82CF-011B-4A90-81B9-37A292E3010E.JPG', './Gallery/407285F1-0420-4DC1-A860-A0F4E45CA8C0.JPG',
    './Gallery/2029D133-9BEA-462E-8F60-FA5222760356.JPG', './Gallery/C423A65C-9257-4820-9693-F01D5B310C00.JPG', './Gallery/523C52E0-01D7-4CF2-B503-4B9B60042CF9.JPG',
    './Gallery/767E9830-FE1E-456C-A5F2-E872CB12CB12.JPG', './Gallery/5F0CF461-9327-4F7E-B885-5AE706969E64.JPG', './Gallery/DC3F0E54-E01B-450D-8A5A-9FA6B754E226.JPG',
    './Gallery/AD76EAE4-3CE8-48A6-9CA0-1EF5C7A50C0C.JPG', './Gallery/F92EF0D6-C30E-4C95-ADAF-8F3980EE8E12.JPG', './Gallery/DED4FDEB-6CEA-4A4D-848A-70E7A41CD4CC.JPG',
    './Gallery/14CC786D-B751-452B-B8C0-4F98046E8FF2.JPG', './Gallery/F545C7DA-7AC7-4E2A-8339-FD88B438A99F.JPG', './Gallery/8618B0A6-805A-4DB0-A9B7-CA5A364241AE.JPG',
    './Gallery/E0691544-988B-460C-BCC8-A6C73738B569.JPG', './Gallery/5DE58066-5BC2-473B-9733-6DA3DE7740AB.JPG', './Gallery/BBC2D84C-2E2F-4366-8551-13E2571F0BC3.JPG',
    './Gallery/5E5FE4A2-118A-410C-A517-13AE092FA456.JPG', './Gallery/AA18A19F-75DF-4077-8E40-BC400CD13593.JPG', './Gallery/30936AB7-EAFA-473B-8F75-6A8F525C10EE.JPG',
    './Gallery/C2F437BB-CE2F-4F12-ACC0-240CF20CDE5C.JPG', './Gallery/47D891E6-EBB7-4566-A680-02AAD78A0918.JPG', './Gallery/79AB576C-5E0D-4564-B740-8AA1D5BE5C7C.JPG',
    './Gallery/EADE00B2-1553-46EF-82E5-FB3AD8706653.JPG', './Gallery/F8FC5EAC-108A-4A7F-87D5-57297F87996C.JPG', './Gallery/4E1121E8-3652-44FD-8F5F-821DA5F264C4.JPG',
    './Gallery/4DCBD458-09B1-4763-ACE3-A73262B180BF.JPG', './Gallery/D8BDFE89-3B1A-419D-BB9D-391777F9F24A.JPG', './Gallery/9D64EB63-9802-4FFD-8ECB-6795F9501BB8.JPG',
    './Gallery/C2A78FC4-20FA-4EC6-AF7A-547419E6D904.JPG', './Gallery/CDEB1BAD-6E80-4D05-AB55-4BBC85C54F54.JPG', './Gallery/7C37BEDA-3BE5-4527-AD8B-707BBE720334.JPG',
    './Gallery/E9FE7A92-0A5A-4076-AD95-9AEF586D8C9B.JPG', './Gallery/D3FC4D58-2785-4A79-920A-C51735FCC856.JPG', './Gallery/D5FAC888-7258-42AD-829E-C734C83DA988.JPG',
    './Gallery/79B56BDC-ED62-4148-AE6F-743EBE1EA7EE.JPG', './Gallery/3B944975-3C2C-4B14-8241-85EBB104809F.JPG', './Gallery/062C24B8-811F-45AA-8AE9-906F194D5F8C.JPG',
    './Gallery/2775B277-F61C-4546-967B-7298377593D0.JPG', './Gallery/1D93B5FC-6AA0-49DB-A76F-80601F21B3F2.JPG', './Gallery/2E4CEFAC-0D48-4E99-B0F3-504E26DF7C33.JPG',
    './Gallery/8727D034-4261-4EC9-9B87-B933F083BB47.JPG', './Gallery/0FEA422E-E42B-43DE-84F5-6B699F6D7DA7.JPG', './Gallery/6A333093-107A-4238-8B8E-7E0801B3E903.JPG', 
    ]

var slideOne = 4;
var slideTwo = 5;
var slideThree = 6;
var slideFour = 7;

function changePhotoForward() {

    if (++slideOne >= images.length){
        slideOne = 0;
    }

    if(++slideTwo >= images.length){
        slideTwo = 0;
    }

    if (++slideThree >= images.length){
        slideThree = 0;
    }

    if (++slideFour >= images.length){
        slideFour = 0;
    }

    slideOneImage.src = images[slideOne];
    slideTwoImage.src = images[slideTwo];
    slideThreeImage.src = images[slideThree];
    slideFourImage.src = images[slideFour];
}

var intervalID = window.setInterval(changePhotoForward, 10000);




