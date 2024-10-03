import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <hr style={{margin: '15px 0'}}/>
        <MySelect 
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          value={filter.sort}
          defaultValue={'Сортировка'}
          options={[
            {value: "title", name: "По названию"},
            {value: "body", name: "По описанию"}
          ]}
        />
        <MyInput 
          value={filter.searchQuery} 
          onChange={event => setFilter({...filter, query: event.target.value})} 
          type="text" 
          placeholder="Поиск..."
        />
      </div>
    )
}

export default PostFilter;