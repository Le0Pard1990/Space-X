import './content.scss'
/* установить глобаьно шрифты по группам */
/* глобально прописать классы для заголовок, ссылок, параграфов */
const Content = () => {

    return (
        // <div class='content'>
        //     <div class="content-items">
        //         <div className="content-travel">
        //             <div className="content-text">
        //                 <h1 className="content-text-h1">ПУТЕШЕСТВИЕ</h1>
        //                 <h6 className="content-text-h6">на красную планету</h6>
        //             </div>
        //             <button className="content-button">
        //             </button>
        //             <div className="content-line"></div>
        //         </div>
        //         <div className="content-benefits">
        //             <div className="content-container">
        //                 <div className="content-container-button content-container-button-1">
        //                    <p className="font-700-18">мы</p>
        //                    <h1>1</h1>{/* h1 */}
        //                    <p className="font-700-18">на рынке</p>
        //                 </div>
        //                 <div className="content-container-button content-container-button-2">
        //                     <p className="font-100">гарантируем</p>
        //                     <h1>50%</h1>
        //                     <p className="font-100">безопасность</p>
        //                 </div>
        //                 <div className="content-container-button content-container-button-3">
        //                     <p className="font-100">календарик за</p>
        //                     <h1>2001<span>г.</span></h1>
        //                     <p className="font-100">в подарок</p>
        //                 </div>
        //                 <div className="content-container-button content-container-button-4">
        //                     <p className="font-100">путешествие</p>
        //                     <h1>597</h1>
        //                     <p className="font-100">дней</p> 
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>



        <div className='content'>
            <div className="content__items">
                <div className="content__travel">
                    <div className="content__travel-header">
                        <h1 className="content__travel-text_h1">ПУТЕШЕСТВИЕ</h1> 
                        <h6 className="content__travel-text_h6">на красную планету</h6>
                    </div>
                    <button className="content__travel-button">Начать путешествие</button>
                    <div className="content__travel-line">
                    </div>
                </div>
                <div className="content__benefits">
                    <div className="content__benefits-container">
                        <div className="content__benefits-item content__benefits-item_1">
                           <h2>мы</h2>
                           <h1>1</h1>{/* h1 */}
                           <h2>на рынке</h2>
                        </div>
                        <div className="content__benefits-item content__benefits-item_2">
                            <h2>гарантируем</h2>{/* заменить font на семантичный класс */}
                            <h1>50%</h1>
                            <h2>безопасность</h2>
                        </div>
                        <div className="content__benefits-item content__benefits-item_3">
                            <h2>календарик за</h2>
                            <h1>2001<span>г.</span></h1>
                            <h2>в подарок</h2>
                        </div>
                        <div className="content__benefits-item content__benefits-item_4">
                            <h2>путешествие</h2>
                            <h1>597</h1>
                            <h2>дней</h2> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;


