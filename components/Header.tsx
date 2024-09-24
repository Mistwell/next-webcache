import Link from "next/link";

export default function Header() {
	return (
		<>
			<header className="fixed left-0 right-0 top-0 bg-white py-4 z-[2]">
				<div className="page-container">
					<ul className="flex items-center justify-between">
						<li>
							<Link href="/">Main</Link>
						</li>
						<li>
							<Link href="/test">Test</Link>
						</li>
						<li>
							<Link href="/">Link 3</Link>
						</li>
						<li>
							<Link href="/">Link 4</Link>
						</li>
						<li>
							<Link href="/">Link 5</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}
