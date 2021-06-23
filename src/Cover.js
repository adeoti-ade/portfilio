const Cover = () => {
    const about = `Quality-oriented professional with 1.5+ years of experience and a proven knowledge of python programming,
    web development and data science. A proactive developer with an exceptional analytical and critical thinking
    skills and the important ability to function well in a fast-paced and deadline drive team`
    return ( 
        
        <div className="cover">
            <div className="cover-one">
                <h4>
                    Adeoti Adegboyega Andrew
                    {/* <br />
                    and start to get back in
                    <br />
                    the business */}
                    <span>
                        <p>
                           {about}
                        </p>
                    </span>
                </h4>
                <div>
                    <button className="button">Learn More</button>
                    <button className="button">Demo</button>
                </div>
            </div>
            <div className="cover-two"></div>
        </div>
     );
}
 
export default Cover;