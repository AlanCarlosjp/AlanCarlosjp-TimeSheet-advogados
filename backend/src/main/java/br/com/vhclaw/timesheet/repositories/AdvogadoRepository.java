package br.com.vhclaw.timesheet.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.vhclaw.timesheet.entities.Advogado;

import java.util.Date;

public interface AdvogadoRepository extends JpaRepository<Advogado, Long>{
	
	Advogado findByCpf(String cpf);
}
