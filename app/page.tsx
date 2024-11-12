"use client";

import ScrollBlock from "@/components/scroll/ScrollBlock";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
	useGSAP(() => {
		gsap.from("[data-top]", {
			autoAlpha: 0,
			top: -20,
			duration: 0.3,
			stagger: 0.2,
		});
	});

	return (
		<>
			<main>
				<div className="min-h-screen bg-purple-400">
					<div className="page-container overflow-hidden">
						<h1 className="pt-32 text-2xl">
							Test page for webcache checking Nextjs 15
						</h1>
						<div className="grid grid-cols-2 gap-8 mt-12">
							<div>
								<ul>
									<li data-top>Opacity show content</li>
									<li data-top>Opacity show content</li>
									<li data-top>Opacity show content</li>
									<li data-top>Opacity show content</li>
									<li data-top>Opacity show content</li>
									<li data-top>Opacity show content</li>
									<li data-top>Opacity show content</li>
								</ul>
							</div>
							<ScrollBlock />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
