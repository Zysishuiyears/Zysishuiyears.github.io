import { gsap } from 'gsap';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
	requestAnimationFrame(() => {
		const introTimeline = gsap.timeline({ defaults: { overwrite: 'auto' } });
		introTimeline
			.from('[data-header]', { y: -10, opacity: 0, duration: 0.28, ease: 'power1.out' }, 0.12)
			.from('[data-profile]', { x: -14, opacity: 0, duration: 0.48, ease: 'power3.out' }, 0.18)
			.from('[data-intro]', { y: 12, opacity: 0, duration: 0.56, ease: 'expo.out' }, 0.24);

		document.querySelectorAll<SVGPathElement>('[data-graph-edge]').forEach((path, index) => {
			const length = path.getTotalLength();
			gsap.fromTo(
				path,
				{ strokeDasharray: length, strokeDashoffset: length },
				{ strokeDashoffset: 0, duration: 0.62 + index * 0.09, ease: 'sine.out', delay: 0.42 + index * 0.05 },
			);
		});

		gsap.from('[data-graph-node]', {
			scale: 0,
			transformOrigin: 'center',
			duration: 0.32,
			stagger: 0.06,
			ease: 'back.out(1.7)',
			delay: 0.7,
		});

		const revealObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					const element = entry.target as HTMLElement;
					gsap.from(element, {
						y: 10,
						opacity: 0,
						duration: 0.4 + Math.min(Number(element.style.getPropertyValue('--reveal-order')) || 0, 3) * 0.04,
						ease: 'power2.out',
						clearProps: 'transform,opacity',
					});
					observer.unobserve(element);
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -4% 0px' },
		);

		document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => revealObserver.observe(element));
	});
}
