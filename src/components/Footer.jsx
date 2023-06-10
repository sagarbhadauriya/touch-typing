import React from "react";
import { useSelector } from "react-redux";
import "../stylesheets/Footer.scss";

function Footer() {
    const { timerId } = useSelector((state) => state.time);

    return (
        <div className={`bottom-area ${timerId ? "hidden" : ""}`}>
            <span className="hint">
                <kbd>Ctrl</kbd> + <kbd>k</kbd> to open command pallet
            </span>
            <span className="hint">
                <kbd>Tab</kbd> to restart test
            </span>
            <footer>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sagarbhadauriya/touch-typing"
                >
                    <span>&lt;/&gt;</span> github
                </a>
                <span>
                    created by{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/sagarbhadauriya"
                    >
                        @sagarbhadauriya
                    </a>
                </span>
            </footer>
        </div>
    );
}

export default Footer;
