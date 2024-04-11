import React from "react";

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content-inner">
                    <div className="content_DAW">
                        <form>
                            DAW
                        </form>
                        <form>
                            <a href="/">Нажми</a>
                            <a href="/">Нажми</a>
                            <a href="/">Нажми</a>
                        </form>
                    </div>
                    <div className="content_VST">
                        <form>
                           VST/VST BUNDLES
                        </form>
                        <form>
                            <a href="/">Нажми</a>
                            <a href="/">Нажми</a>
                            <a href="/">Нажми</a>
                        </form>
                    </div>
                    <div className="content_information">
                        <form>
                            OTHER INFORMATION
                        </form>
                        <form>
                            <a href="/">Нажми</a>
                            <a href="/">Нажми</a>
                            <a href="/">Нажми</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content