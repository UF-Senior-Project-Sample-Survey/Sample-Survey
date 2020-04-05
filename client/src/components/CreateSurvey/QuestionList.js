import React from 'react';

export default ({data}) => {

    const questionList = data
        .map(q => {
            return (
                <div className = 'question-display'>
                    <button class="w3-button w3-circle w3-black">+</button>
                    <div
                        key={q.id}
                        className = 'question-text'
                    >
                        {q.text}
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox"></input>
                    </div>
                </div>
            )
    })

    return (
      <div className = 'question-list'>
          {questionList}
      </div>
    );
}