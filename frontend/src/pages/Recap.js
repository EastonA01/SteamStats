export default function Recap() {
    return (
        <div className="App">
            <div className="recap flex-row">
                <div className="recap-main flex-col">
                    <div className="recap-profile flex-row">
                        <div className="recap-profile-pic">
                            <img src="https://www.sciencefriday.com/wp-content/uploads/2022/04/pitbull-illustration.jpg" />
                        </div>
                        <div className="recap-profile-text">
                            <h3>John Cena</h3>
                            <h5>🏈US</h5>
                            <h5>My bio here aha so quirky</h5>
                            <h5><a>https://linktree.com/johnCena</a></h5>
                        </div>
                    </div>
                    <div className="recap-recent">
                        <div className="category flex-row">
                            <h3>Recent Activity</h3>
                            <h3>36.2 hours past 2 weeks</h3>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title flex-row">
                                    <img src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg" />
                                    <h4>Apex Legends</h4>
                                </div>
                                <div className="card-desc">
                                    <h4>5.5hrs on record</h4>
                                    <h4>Last played on Mar 10th</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <h4>Achievement Progress</h4>
                                <h4>19 of 54  [====......]</h4>
                                <button>🏆</button>
                                <button>🏆</button>
                                <button>🏆</button>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title flex-row">
                                    <img src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg" />
                                    <h4>Apex Legends</h4>
                                </div>
                                <div className="card-desc">
                                    <h4>5.5hrs on record</h4>
                                    <h4>Last played on Mar 10th</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <h4>Achievement Progress</h4>
                                <h4>19 of 54  [====......]</h4>
                                <button>🏆</button>
                                <button>🏆</button>
                                <button>🏆</button>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title flex-row">
                                    <img src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg" />
                                    <h4>Apex Legends</h4>
                                </div>
                                <div className="card-desc">
                                    <h4>5.5hrs on record</h4>
                                    <h4>Last played on Mar 10th</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <h4>Achievement Progress</h4>
                                <h4>19 of 54  [====......]</h4>
                                <button>🏆</button>
                                <button>🏆</button>
                                <button>🏆</button>
                            </div>
                        </div>
                    </div>
                    <div className="recap-comments flex-col">
                        <div className="category flex-row">
                            <h3>Comments</h3>
                            <h4>View All 26 Comments</h4>
                            <h4><b>1 2 3 4 5</b></h4>
                        </div>
                        <p>Jason: happy bday!</p>
                        <br />
                        <p>Lenny: true gamer</p>
                    </div>
                </div>

                <div className="recap-aside flex-col">
                    <h3>Level <p className="lvl">81</p></h3>
                    <div className="recap-actions">
                        <div className="flex-row">
                            <button>Add Friend</button>
                            <button>🏆</button>
                            <button>🤝🏽</button>
                            <button>...</button>
                        </div>
                    </div>
                    <div className="recap-owned">
                        <div className="flex-col">
                            <h3>Currently Online</h3>
                            <br />
                            <h4>Profile Awards 3</h4>
                            <div className="flex-row">
                                <button>🏆</button>
                                <button>🏆</button>
                                <button>🏆</button>
                            </div>
                            <h4>Badges 3</h4>
                            <div className="flex-row">
                                <button>🏆</button>
                                <button>🏆</button>
                                <button>🏆</button>
                            </div>
                            <p>Games: 47</p>
                            <p>Friends: 12</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}