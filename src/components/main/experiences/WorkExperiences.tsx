import SectionHead from '../section/SectionHead'

const WorkExperiences = () => {
	return (
		<section className="flex items-center justify-center flex-col mt-10 lg:mt-14 lg:mb-14" id="experiences">
			<SectionHead text={"Experiência Profissional"} />
			<div className="work-details">
				<div className="technologies-column">
					<h3>Tecnologias Utilizadas</h3>
					<ul>
						<li>Python</li>
						<li>Flask</li>
						<li>FastApi</li>
						<li>SQL Server</li>
						<li>PostgreSQL</li>
						<li>OpenCV</li>
						<li>Docker</li>
					</ul>
				</div>
				<div className="work-description-column">
					<div className="ask-tech">
						<ul>
							<li className="company-id">
								<h4>Desenvolvedor Back-End Python</h4>
								<h5>Ask technology LTDA</h5>
								<p>Setembro 2021 - Atualmente</p>
							</li>
							<li className="company-logo">
								<img src="./images/companies/Ask-Logotipo.png" alt="Ask Technology" />
							</li>
						</ul>
						<p>
							Trabalho como principal desenvolvedor Back-End tanto nas tomadas de decisões e aplicações de
							tecnologias de back-end como gerenciamento e criação de scripts para banco de dados. Atuei junto a
							clientes para criação de regras de negócios que melhor se aplicam tanto na resolução de problemas como
							na automatização da mesma como também com migração entre banco de dados ou sistemas. Todo o
							processo de implementação de novas funcionalidades era realizado através de Git Flow e Code Review e
							todas as aplicações eram executadas dentro de containers docker em servidores Linux.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WorkExperiences
