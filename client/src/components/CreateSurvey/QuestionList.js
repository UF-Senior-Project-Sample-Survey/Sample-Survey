import React from 'react';

export default ({data, addCategory, selectedCategories}) => {

    const categoryList = data
        .map(c => {

            const questionList = c.questions
            .map(q => {
                return (
                    <div id={c.id} className = "question">
                        <div
                            key={q.qid}
                            className = 'question-text' 
                        >
                            {q.qtext}
                        </div>
                    </div>
                )
            })
            return (
                <div className = 'list-container'>
                    <div className = 'category-display'>
                        <div className = 'category-container' >
                            <div
                                key={c.id}
                                className = 'category-text' 
                            >
                                {c.text}
                            </div>
                        </div>
                        <label className = "checkbox">
                            <input type="checkbox" onClick={() => addCategory(c.id)}></input>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className = 'question-container'> 
                        {questionList}
                    </div>
                </div>
            )
    })

    return (
      <div className = 'question-list'>
          {categoryList}
      </div>
    );
}