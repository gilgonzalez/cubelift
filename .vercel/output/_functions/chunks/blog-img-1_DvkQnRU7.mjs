const img = new Proxy({"src":"/_astro/blog-img-1.BoxvE0Xz.jpg","width":520,"height":700,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/franciscojaviergilgonzalez/Desktop/blacknosaur/cubelift/src/assets/blog/blog-img-1.jpg";
							}
							
							return target[name];
						}
					});

export { img as i };
