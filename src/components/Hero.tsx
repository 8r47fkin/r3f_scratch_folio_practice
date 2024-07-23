import { AvatarCanvas } from "./AvatarCanvas";

const Hero = () => {
	return (
		<section className="bg-[url('/hero-bck.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-screen mx-auto">
			<div className="px-6  absolute inset-0 top-[132px] max-w-7xl mx-auto gap-6">
				{/*  message */}
				<div>
					<h1 className="text-white text-7xl font-extrabold">
						Hello World! I'm <span className="text-theme">Bharath</span>
					</h1>
					<p className="hidden sm:block text-lg mt-9 text-white w-[550px]">
						Exploring React three fiber
						<br />
						So come on in, explore a little, and let's make some
						magic together!
					</p>
				</div>
			</div>

			<AvatarCanvas />
		</section>
	);
};

export default Hero;
