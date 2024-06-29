import Card from './Card';

const LogoSlider = () => {

	const images = [
		{
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
			alt: "VS Code"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
			alt: "Docker"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
			alt: "PostgreSQL"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
			alt: "SQL Server"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
			alt: "MongoDB"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
			alt: "Python"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
			alt: "Flask"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
			alt: "FastApi"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
			alt: "OpenCV"
		},
		{
			src: "https://avatars.githubusercontent.com/u/110818415?s:200&v:4",
			alt: "Pydantic"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
			alt: "Sass"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
			alt: "React"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
			alt: "Next JS"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
			alt: "Go"
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
			alt: "Spring Boot"
		}
	]

	return (
		<section className="relative overflow-hidden whitespace-nowrap py-6 bg-slate-300 mt-12">
			<div className='flex items-center w-max'>
				<div className={`flex items-center justify-start animate-logo-slider`}>
					{[...images].map((image, idx) =>
						<Card src={image.src} alt={image.alt} key={idx} />
					)}
				</div>
				<div className={`flex items-center justify-start animate-logo-slider`}>
					{[...images].map((image, idx) =>
						<Card src={image.src} alt={image.alt} key={idx} />
					)}
				</div>
			</div>
		</section>
	)
}

export default LogoSlider
