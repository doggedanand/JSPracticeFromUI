var elementIndex = 1;
var arryObject = [];

// Define a constructor function for creating Student objects.
function Student(name, age, address, country, gender) {
    this.id = elementIndex
    this.name = name;
    this.age = age;
    this.address = address;
    this.country = country;
    this.gender = gender;
}

//End 


function createObject() {

    var a = document.getElementById('name').value
    var b = document.getElementById('age').value
    var c = document.getElementById('address').value
    var d = document.getElementById('country').value
    var e = document.getElementById('gender').value
    var obj = new Student(a, b, c, d, e);

    arryObject.push(obj);

    reRenderTableData()

    elementIndex++;

}






function reRenderTableData() {

    document.getElementsByTagName('tbody')[0].innerHTML = ''
    arryObject.forEach(function (singleRecord, index) {
        let tr = `<tr>
    <td>${index + 1}</td>`
            + `<td>` + singleRecord.name + `</td>`
            + `<td>` + singleRecord.age + `</td>`
            + `<td>` + singleRecord.address + `</td>`
            + `<td>` + singleRecord.country + `</td>`
            + `<td>` + singleRecord.gender + `</td>`
            + `<td><input type="checkbox" data-id="${singleRecord.id}" 
      id="${index + 1}" name="checkbox"></td>
      </tr>`

       
        let existingRow = document.querySelector(`tr[data-id="${singleRecord.name}"]`);
        if (!existingRow) {
            document.getElementsByTagName('tbody')[0].innerHTML += tr
        }
    })


}

function removeRecord() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(function (checkbox) {
        var id = +(checkbox.getAttribute('data-id'));
        arryObject = arryObject.filter(val => val.id !== id);
        reRenderTableData();
    });
}


function openForm() {

    document.getElementById('updateForm').style.display = 'block'
}

function closeForm() {

    document.getElementById('updateForm').style.display = 'none'
}


function openUpdateForm() {
    var table = document.getElementById('table');
    var checkboxes = table.querySelectorAll('input[type="checkbox"]:checked');

    if (checkboxes.length === 1) {
        var index = checkboxes[0].getAttribute('data-id');
        var record = arryObject.find(item => item.id === parseInt(index));

        document.getElementById('updateName').value = record.name;
        document.getElementById('updateAge').value = record.age;
        document.getElementById('updateAddress').value = record.address;
        document.getElementById('updateCountry').value = record.country;
        document.getElementById('updateGender').value = record.gender;

        document.getElementById('updateForm').style.display = 'block';
    } else {
        alert('Please select a single record to update.');
    }
}


function updateRecord() {
    var name = document.getElementById('updateName').value;
    var age = document.getElementById('updateAge').value;
    var address = document.getElementById('updateAddress').value;
    var country = document.getElementById('updateCountry').value;
    var gender = document.getElementById('updateGender').value;

    var table = document.getElementById('table');
    var checkboxes = table.querySelectorAll('input[type="checkbox"]:checked');

    if (checkboxes.length === 1) {
        var index = checkboxes[0].id - 1; // Subtract 1 to get the correct array index
        var record = arryObject[index];

        record.name = name;
        record.age = age;
        record.address = address;
        record.country = country;
        record.gender = gender;

        closeUpdateForm();
        reRenderTableData();
    } else {
        alert('Please select a single record to update.');
    }
}





function closeUpdateForm() {
    document.getElementById('updateForm').style.display = 'none';
}



function compareRecord() {
    var table = document.getElementById('table');
    var checkboxes = table.querySelectorAll('input[type="checkbox"]:checked');

    if (checkboxes.length === 2) {
        var index1 = checkboxes[0].id - 1;
        var index2 = checkboxes[1].id - 1;

        var record1 = arryObject[index1];
        var record2 = arryObject[index2];
        console.log('index 1 is :', record1)
        console.log('index 2 is :', record2)
      
        if (record1 && record2) {

            const key1=Object.keys(record1);
            const key2=Object.keys(record2)

            if(key1.length!==key2.length){
                alert('Selected records are diffrent')
            }

            for(const key of key1){
                if(record1[key]!==record2[key]){
                    console.log('record1[key]',record2[key])
                    alert('Selected records are diffrent')
                    break;
                }else{
                    alert('Selected records are identical.')
                }
            }
            
            
        }
    } else {
        alert("Please select exactly two records to compare.");
    }
}













