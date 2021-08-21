
// var courseApi = 'http://localhost:3000/cousers';


// fetch(courseApi)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(courses) {

//         var html = '';
//         courses.map(function(course) {
//             return html+= `<li>
//                 <h2>${course.name}</h2>
//                 <p>${course.description} </p>
//             </li>`;
//         })
//         var blockcourse = document.querySelector('.blockcourse');
//         blockcourse.innerHTML = html;
//     })  


var courseApi = 'http://localhost:3000/cousers';



function start() {
    getCourse(renderCourse);

    handleCreateCourse()
}

start();

function getCourse(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function createCourse(data,callback) {
    var option = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
    }
    fetch(courseApi, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function handleCreateCourse() {
    var create = document.querySelector('#create');
    create.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description  = document.querySelector('input[name="description"]').value;

        var formDate = {
            name: name,
            description: description
        }

        createCourse(formDate,function() {
            getCourse(renderCourse);
        })
    }
}

function handleDeleteCourse(id) {
    var option = {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }

    fetch(courseApi + '/' + id,option) 
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var listItem = document.querySelector('.list-item-' + id);

            if(listItem) {
                listItem.remove();
            }
        })
}

function updateCourse(id,data,callback) {
    var option = {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
    }
    fetch(courseApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function handleUpdateCourse(id,name,description) {
    var create = document.querySelector('#create');
    var update = document.querySelector('#update');

    create.hidden = true;
    update.hidden = false;
    

    update.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description  = document.querySelector('input[name="description"]').value;
        
        var formUpdate = {
            name: name,
            description: description
        }

        updateCourse(id,formUpdate,function() {
            getCourse(renderCourse);
        })
        
        update.hidden = true;
        create.hidden = false;
       
    
    }

  

}
function renderCourse(courses) {
    var htmls = courses.map(function (course) {
        return `
            <li class = "list-item-${course.id}">
                <h4>${course.name} </h4>
                <p>${course.description} </p>
            <button onClick = handleDeleteCourse(${course.id})>Xóa</button>
            <button onClick="handleUpdateCourse(${course.id},'${course.name}','${course.description}')">Sửa</button>
            </li>
        `
    })
    var blockCourse = document.querySelector('.block-course').innerHTML = htmls.join('');
}









