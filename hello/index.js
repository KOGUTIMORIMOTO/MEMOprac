function saveData1() {
    var inputData1 = document.getElementById('dataInput1').value;
    localStorage.setItem('savedData1', inputData1);

    var inputData1_1 = document.getElementById('dataInput1_1').value;
    localStorage.setItem('savedData1_1', inputData1_1);
}

function saveData2() {
    var inputData2 = document.getElementById('dataInput2').value;
    localStorage.setItem('savedData2', inputData2);

    var inputData2_2 = document.getElementById('dataInput2_2').value;
    localStorage.setItem('savedData2_2', inputData2_2);
}

function saveData3() {
    var inputData3 = document.getElementById('dataInput3').value;
    localStorage.setItem('savedData3', inputData3);

    var inputData3_3 = document.getElementById('dataInput3_3').value;
    localStorage.setItem('savedData3_3', inputData3_3);
}

function saveData4() {
    var inputData4 = document.getElementById('dataInput4').value;
    localStorage.setItem('savedData4', inputData4);

    var inputData4_4 = document.getElementById('dataInput4_4').value;
    localStorage.setItem('savedData4_4', inputData4_4);
}

function saveData5() {
    var inputData5 = document.getElementById('dataInput5').value;
    localStorage.setItem('savedData5', inputData5);

    var inputData5_5 = document.getElementById('dataInput5_5').value;
    localStorage.setItem('savedData5_5', inputData5_5);
}

function saveData6() {
    var inputData6 = document.getElementById('dataInput6').value;
    localStorage.setItem('savedData6', inputData6);

    var inputData6_6 = document.getElementById('dataInput6_6').value;
    localStorage.setItem('savedData6_6', inputData6_6);
}

function saveData7() {
    var inputData7 = document.getElementById('dataInput7').value;
    localStorage.setItem('savedData7', inputData7);

    var inputData7_7 = document.getElementById('dataInput7_7').value;
    localStorage.setItem('savedData7_7', inputData7_7);
}

function deleteData1() {
    var res = confirm("スペース1の内容を削除します。よろしいですか？");
    if( res == true ) {
        localStorage.removeItem('savedData1');
        localStorage.removeItem('savedData1_1');
        location.reload();
    } else {
        location.reload();
    }
}

function deleteData2() {
    var res = confirm("スペース2の内容を削除します。よろしいですか？");
    if( res == true ) {
        localStorage.removeItem('savedData2');
        localStorage.removeItem('savedData2_2');
        location.reload();
    } else {
        location.reload();
    }
}

function deleteData3() {
    var res = confirm("スペース3の内容を削除します。よろしいですか？");
    if( res == true ) {
        localStorage.removeItem('savedData3');
        localStorage.removeItem('savedData3_3');
        location.reload();
    } else {
        location.reload();
    }
}

function deleteData4() {
    var res = confirm("スペース4の内容を削除します。よろしいですか？");
    if( res == true ) {
        localStorage.removeItem('savedData4');
        localStorage.removeItem('savedData4_4');
        location.reload();
    } else {
        location.reload();
    }
}

function deleteData5() {
    var res = confirm("スペース5の内容を削除します。よろしいですか？");
    if( res == true ) {
        localStorage.removeItem('savedData5');
        localStorage.removeItem('savedData5_5');
        location.reload();
    } else {
        location.reload();
    }
}

function deleteData6() {
    var res = confirm("スペース6の内容を削除します。よろしいですか？");
    if( res == true ) {
        localStorage.removeItem('savedData6');
        localStorage.removeItem('savedData6_6');
        location.reload();
    } else {
        location.reload();
    }
}

function deleteData7() {
    var res = confirm("スペース7の内容を削除します。よろしいですか？");
    if( res == true ) {
        localStorage.removeItem('savedData7');
        localStorage.removeItem('savedData7_7');
        location.reload();
    } else {
        location.reload();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var savedData1_1 = localStorage.getItem('savedData1_1');
    document.getElementById('dataInput1_1').value = savedData1_1 || 'タイトルなし'; 
});

document.addEventListener('DOMContentLoaded', function() {
    var savedData2_2 = localStorage.getItem('savedData2_2');
    document.getElementById('dataInput2_2').value = savedData2_2 || 'タイトルなし'; 
 });
        
document.addEventListener('DOMContentLoaded', function() {
    var savedData3_3 = localStorage.getItem('savedData3_3');
    document.getElementById('dataInput3_3').value = savedData3_3 || 'タイトルなし'; 
});
        
document.addEventListener('DOMContentLoaded', function() {
    var savedData4_4 = localStorage.getItem('savedData4_4');
    document.getElementById('dataInput4_4').value = savedData4_4 || 'タイトルなし'; 
});

document.addEventListener('DOMContentLoaded', function() {
    var savedData5_5 = localStorage.getItem('savedData5_5');
    document.getElementById('dataInput5_5').value = savedData5_5 || 'タイトルなし'; 
});

document.addEventListener('DOMContentLoaded', function() {
    var savedData6_6 = localStorage.getItem('savedData6_6');
    document.getElementById('dataInput6_6').value = savedData6_6 || 'タイトルなし'; 
});

document.addEventListener('DOMContentLoaded', function() {
    var savedData7_7 = localStorage.getItem('savedData7_7');
    document.getElementById('dataInput7_7').value = savedData7_7 || 'タイトルなし'; 
});