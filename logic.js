
function word_counter(){
    let dict = []; //dictiornary for all the words in the text
    let dict_count = [];//a count for each word

    input = document.getElementById("in");
    inp = input.value;
    

    let temp = "";
    for (let index = 0; index < inp.length; index++) {
        temp += inp[index];
        if(inp[index+1] == ','){
            index += 1;
        }
        if(inp[index+1] == ' ' || inp[index+1] == '\n'){
            let temp2 = check(dict,temp);
            if(temp2 != -1){
                dict_count[temp2] += 1;
                temp = '';
                index++;
            }    
            else{
            dict.push(temp);
            dict_count.push(1);
            temp = '';
            index += 1;
            }
        }
        

        
    }
    let temp2 = check(dict,temp);
    if(temp2 != -1){
        dict_count[temp2] += 1;
        temp = '';
    } 
    else{
        dict.push(temp);
        dict_count.push(1);
        temp = '';
        }
    sort(dict,dict_count);
    create_table(dict,dict_count);
}

//checks if the word has already been written or not
function check(dict, temp){
    for (let index = 0; index < dict.length; index++) {
        if(temp == dict[index]){
            return index;
        }
    }
    return -1;
}

//fills a table with the frequency of each word.
function create_table(dict, dict_count){
    var table = document.getElementById("mytable");
    table.innerHTML = '';//removes all rows from the last time it ran

    table.className = "tab2";
    console.log(dict);
    console.log(dict_count);

    for (let index = 0; index < dict.length; index++) {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(0);
        
        cell1.innerHTML = dict[index];
        cell2.innerHTML = dict_count[index] + "  |";
    }
}

//simple selection sort algorithm
function sort(dict,dict_count) {
    for (let index = 0; index < dict.length; index++) {
        for (let index2 = 0; index2 < dict.length; index2++) {
            if (dict_count[index] < dict_count[index2]) {
                //changes positions of count array of the words
                let temp = dict_count[index];
                dict_count[index] = dict_count[index2];
                dict_count[index2] = temp;
                //changes the positions of the words
                temp = dict[index];
                dict[index] = dict[index2];
                dict[index2] = temp;
            }
            
        }
        
    }
}
