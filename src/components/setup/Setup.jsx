import React from "react";
import setupPicture from "../../images/setup.JPG";

const Setup = () => {
	return (
		<section className="main main__setup">
			<main className="setup__container">
				<img src={setupPicture} alt="Setup" className="setup__img" />
				<article className="setup__description">
					<article className="setup__desksetup">
						<h1 className="setup__heading">Desk setup</h1>
						<ul className="setup__list">
							<li className="setup__list__item">
								Macbook Pro 13 inch 2016 &#8211; 2.9GHz i5, 8GB RAM
							</li>
							<li className="setup__list__item">
								Samsung 49" Monitor LC49J890DKRXEN
							</li>
							<li className="setup__list__item">Apple Magic Keyboard</li>
							<li className="setup__list__item">Apple Magic Trackpad</li>
							<li className="setup__list__item">Clamshell stand (local buy)</li>
							<li className="setup__list__item">Logitech C920 Pro Webcam</li>
							<li className="setup__list__item">
								KRK Rokit 5 monitor speakers
							</li>
							<li className="setup__list__item">Autonomous Desk</li>
							<li className="setup__list__item">
								Trust gaming chair with roller blade wheels
							</li>
							<li className="setup__list__item">NanoLeaf LED strip</li>
							<li className="setup__list__item">Sony WH-1000XM3</li>
						</ul>
					</article>
					<article className="setup__desksetup">
						<h1 className="setup__heading">Editor(s)</h1>
						<ul className="setup__list">
							<li className="setup__list__item">
								Visual Studio Code
								<ul>
									<li className="setup__list__item">Tokyo Night Theme</li>
									<li className="setup__list__item">
										Fira Code Font &#8211; with font ligatures
									</li>
								</ul>
							</li>

							<li className="setup__list__item">
								IntelliJ IDEA
								<ul>
									<li className="setup__list__item">Atom One Dark Theme</li>
									<li className="setup__list__item">Fira Code Font</li>
								</ul>
							</li>
						</ul>
					</article>
				</article>
			</main>
		</section>
	);
};

export default Setup;
