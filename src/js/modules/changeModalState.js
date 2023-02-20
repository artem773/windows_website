import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) =>{

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElement(event, element, propertie){

        element.forEach((item, i)=>{
            item.addEventListener(event, ()=>{

                switch(item.nodeName){
                    case 'SPAN':
                        state[propertie] = i;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[propertie] = 'Cold' : state[propertie] = 'Warm';
                            element.forEach((box, j)=>{
                                box.checked = false;
                                if(i == j){
                                    box.checked = true;
                                }
                            });
                        }else{
                            state[propertie] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[propertie] = item.value;
                        break;
                }
                console.log(state);
            })
        });
    }

    bindActionToElement('click', windowForm, 'form');
    bindActionToElement('input', windowHeight, 'height');
    bindActionToElement('input', windowWidth, 'width');
    bindActionToElement('change', windowType, 'type');
    bindActionToElement('change', windowProfile, 'profile');


}

export default changeModalState;