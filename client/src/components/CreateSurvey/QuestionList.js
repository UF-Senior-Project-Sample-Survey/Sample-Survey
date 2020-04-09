import React, { Component } from 'react';
import './QuestionList.css';

class QuestionList extends Component {
    render() {
    const { questions, categories } = this.props;
    const listings = categories
            .map(c => {
                const qs = questions
                    .filter(q => {
                        return (q.category === c);
                    })
                    .map(q => {
                        return (
                            <div key={q._id} id={q._id} className = "question">
                                <div
                                    className = 'question-text' 
                                >
                                    {q.prompt}
                                </div>
                            </div>
                        )
                    });

                return (
                    <div className = 'list-container'> 
                        <div className = 'category-display'>
                            <div className = 'category-container' >
                                <div
                                    key={c}
                                    className = 'category-text' 
                                >
                                    {c}
                                </div>
                            </div>
                            <label className = "checkbox">
                                <input type="checkbox" id={'check-' + c}></input>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className = 'question-container'> 
                            {qs}
                        </div>
                    </div>
                )
            })

    return (
        <div className = 'question-list'>
                {listings}
        </div>
    )
    }
}

export default QuestionList;