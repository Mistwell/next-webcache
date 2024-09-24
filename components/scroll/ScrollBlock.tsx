"use client";

import { useGSAP } from "@gsap/react";
import bird from "./test-img.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function ScrollBlock() {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to("[data-scroll]", {
			x: 300,
			scrollTrigger: {
				trigger: "[data-scroll]",
				pin: true,
				markers: false,
				scrub: 0.1,
			},
		});
	});

	return (
		<>
			<div className="min-h-[200vh] " data-scroll>
				<div data-box className="inline-block">
					<Image alt="тест" src={bird} priority />
				</div>
			</div>
		</>
	);
}
