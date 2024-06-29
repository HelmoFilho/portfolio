import Section from '../section/Section';
import ServiceBlock from './ServiceBlock';

const Services = () => {
	const services = true ? [
		{
			"heading": "Backend Developer",
			"text": `Backend developer focused on creating systems with high availability, quality and security.`,
			"image": {
				"src": "./images/services/web-programming.png",
				"alt": "programming",
			}
		},
		{
			"heading": "Python Developer",
			"text": `The main language I use. I've used it to create computer vision, data science and backend projects.`,
			"image": {
				"src": "./images/services/server.png",
				"alt": "server",
			}
		},
		{
			"heading": "Database Administrator",
			"text": `Mainly SQL Server and PostgreSQL. I've worked on modeling, creating queries, procedures and views and integrating databases.`,
			"image": {
				"src": "./images/services/database.png",
				"alt": "database",
			}
		}
	] : [
		{
			"heading": "Programador Backend",
			"text": `Desenvolvedor backend com foco na criação de sistemas de alta disponibilidade, qualidade e segurança.`,
			"image": {
				"src": "./images/services/web-programming.png",
				"alt": "programming",
			}
		},
		{
			"heading": "Desenvolvedor Python",
			"text": `Principal linguagem que eu utilizo. Já utilizei para criação de projetos com visão computacional,
								data science e backend.`,
			"image": {
				"src": "./images/services/server.png",
				"alt": "server",
			}
		},
		{
			"heading": "Administrador de Banco de Dados",
			"text": `Principalmente SQL Server e PostgreSQL. Trabalhei desde a modelagem, criação de consultas, procedures e views e na intregração de banco de dados.`,
			"image": {
				"src": "./images/services/database.png",
				"alt": "database",
			}
		}
	]

	return (
		<Section head={"Services"} anchor={"services"}>
			<div className='flex flex-wrap px-8 md:px-16 lg:px-24 gap-8 lg:gap-12'>
				{services.map((service, idx) => (
					<ServiceBlock key={idx} heading={service.heading} text={service.text}
						src={service.image?.src} alt={service.image?.alt} />
				))}
			</div>
		</Section>
	)
}

export default Services
