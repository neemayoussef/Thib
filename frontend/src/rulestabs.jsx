import React from "react";

  export function Rulestabs (props){

    const [visibleTab, setVisibleTab] = React.useState(props.data[0].id)
  
    const listTitles = props.data.map((item, i) => 
        <li key={i} onClick={() => setVisibleTab(item.id)} className={visibleTab != item.id ? "tab-title tab-title--inactive" : "tab-title"}>{item.tabTitle}</li>
    )       
                                     
    const listContent = props.data.map((item) => 
        <div className="w-full h-full" style={visibleTab === item.id ? {} : {display: 'none'}}>{item.tabContent}</div>
    )
    
    return (
      <div id="tabs" className="w-full h-full">
        <div id="title2" className="h-[10%]">
          <ul className="w-full h-full flex">
            {listTitles}
          </ul>
        </div>
        <div id="" className="w-full h-[90%] flex flex-col items-center justify-center">
          {listContent}
        </div>
      </div>
      )
  }


