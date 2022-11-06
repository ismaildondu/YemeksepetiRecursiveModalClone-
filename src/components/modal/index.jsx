import React from 'react'
import styles from './Modal.module.css'
import { APP_CONTEXT } from '../../context'
import { useEffect } from 'react'

function  OptionRadioRender({item,itemParent}) {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const [moreOptions, setMoreOptions] = React.useState(false);

  const [options, setOptions] = React.useState(item.slice(0,3));

  const moreOptionsCount = item.length - 3;

  const  { optionsBag } = React.useContext(APP_CONTEXT);
  const { chooseJSONBag } = React.useContext(APP_CONTEXT);

  const [subOptions, setSubOptions] = React.useState(null);

  useEffect(()=>{
  
   if(selectedOption && Object.keys(selectedOption).includes("subOptions")){
     
    let SubOptionList=[];
    const AllSubOptions= selectedOption.subOptions.map((item)=>{
      SubOptionList.push({
        parentItem: itemParent.title,
        ...item
      });
    })

    optionsBag.setOptions((prev)=>{
      return [...prev, ...SubOptionList]
    })

    
   }  
     
   
  },[selectedOption])

  

  const moreOptionsClickHandler = () => {
    setMoreOptions(!moreOptions);
    setOptions(item);
  }

  const selectedOptionHandler = (option) => {

 
    setSelectedOption(option);
    if(option.subOptions){
      setSubOptions(true);
    }else{
      let L_parentItem = itemParent.title;
      optionsBag.setOptions((prev)=>{
        let L_newList = [];
        prev.forEach((item)=>{
            if(Object.keys(item).includes("parentItem")){
              if(item.parentItem !== L_parentItem){
                L_newList.push(item);
              }
            }else{
              L_newList.push(item);
            }

        });
        return L_newList;

        


      })
      setSubOptions(false);
    }

  
   

  }

 

  return(

    <div className={styles.option_radio_container}>
      {
       options.map((option, index)=>{

        return(
          <div className={styles.option_radio_select}>

              <div>
                <input onChange={()=>selectedOptionHandler(option)} type="radio" id={option.id+"-"+itemParent.id} name={itemParent.id+"grop"}  />
                <label htmlFor={option.id+"-"+itemParent.id} onClick={()=>setSelectedOption(option.id)}>{option.title}</label>
              </div>
              <div>  
            {
              option.price!=0 && <p>{option.price} TL</p>
            }
              </div>

           

          </div>
         
        
        )

        })
      }

      {
        item.length > 3 && !moreOptions && <div className={styles.option_select_more_options}>
          <button onClick={moreOptionsClickHandler}>Daha fazla gör ({moreOptionsCount})</button>
        </div>
      }
    </div>

  );

}

function OptionSelect({item}) {

 

 

  return(

    <div className={styles.option_select_container}>
      <div className={styles.option_select_title}>
        <h3>{item.title}</h3>
        <h3 className={styles.option_reqiured}>{ item.isRequired && "ZORUNLU"}</h3>
      </div>  
      <div className={styles.option_select_options}>

        {
        <OptionRadioRender  item={item.options} itemParent={item}/>
        }

     




       </div>
          


    </div>

  );



}

function Modal({options}) {
  
  

  const { modalToggleBag } = React.useContext(APP_CONTEXT)
  const { setShowModal } = modalToggleBag

  const { optionsBag } = React.useContext(APP_CONTEXT)
  
 
  const modalBackgroundClickHandler = (e) => {
    if (e.target.classList.contains(styles.modal_container)) {
      setShowModal(false);
    }
  }

  
   useEffect(()=>{
    document.body.style.overflow = 'hidden'
    return ()=>{
      document.body.style.overflow = 'unset'
    }
   },[]);


  return (
    <div onClick={modalBackgroundClickHandler} className={styles.modal_container}>

      <div className={styles.modal_content}>
        <div className={styles.modal_content_image_and_close}>
          <div>
            <button onClick={()=>setShowModal(false)} className={styles.close_button}>X</button>
          </div>
        </div>

        <div className={styles.modal_content_action}>
          <div className={styles.modal_content_title}>
            <div>
            <h1>Mucize Menü (2 Adet Orta Boy Pizza)</h1>
            <p>140 TL</p>
            </div>
            <p>2 Adet Orta Boy Pizza + Coca-Cola (1 L.) (Cazip pizzalar için geçerlidir. Özel pizzalar için 7 TL, Bol Malzeme pizzalar için 14 TL, Trend pizzalar için 21 TL, Gurme pizzalar için 28 TL fiyat farkı alınmaktadır.)</p>
            <div className={styles.divder}></div>
          </div>

        <div className={styles.modal_content_optionlist}>

          {
            optionsBag.options.map((item, index)=>{
              return <OptionSelect  item={item} key={index}/>
            })
          }
        
        </div>            




        </div>


      
     </div>




    </div>
  )
}

export default Modal