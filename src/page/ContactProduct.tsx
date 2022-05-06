import React from 'react'

const ContactProduct = () => {
    return (
        <div>
            <section className="probootstrap-section">
                <div className="container" style={{width: '980px'}}>
                    <div className="row probootstrap-gutter60">
                        <div className="col-md-8">
                            <h2 className="mt0">Contact Form</h2>
                            <form action="#" method="post" className="probootstrap-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="fname">First Name</label>
                                            <input type="text" className="form-control" id="fname" name="fname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="lname">Last Name</label>
                                            <input type="text" className="form-control" id="lname" name="lname" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject" name="subject" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea cols={30} rows={10} className="form-control" id="message" name="message" defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <input style={{padding: '5px 30px'}}  type="submit" className="btn btn-primary btn-lg" id="submit" name="submit" defaultValue="Send Message" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <h2 className="mt0">Get In Touch</h2>
                            <ul className="probootstrap-contact-info">
                                <li><i className="icon-location2" /> <span>198 West 21th Street, Suite 721 New York NY 10016</span></li>
                                <li><i className="icon-mail" /><span>info@domain.com</span></li>
                                <li><i className="icon-phone2" /><span>+123 456 7890</span></li>
                            </ul>
                            <h2>Feedback</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p><a href="#" className="btn btn-primary" role="button">Send Message</a></p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactProduct
