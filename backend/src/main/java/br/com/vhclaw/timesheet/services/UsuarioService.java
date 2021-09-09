package br.com.vhclaw.timesheet.services;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.vhclaw.timesheet.DTO.UsuarioDTO;
import br.com.vhclaw.timesheet.DTO.UsuarioInsertDTO;
import br.com.vhclaw.timesheet.DTO.UsuarioUpdateDTO;
import br.com.vhclaw.timesheet.entities.Usuario;
import br.com.vhclaw.timesheet.repositories.UsuarioRepository;

@Service
public class UsuarioService implements UserDetailsService {
	
	private static Logger logger = org.slf4j.LoggerFactory.getLogger(UsuarioService.class);
	
	@Autowired
	private UsuarioRepository repository;
		
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Transactional(readOnly = true)
	public List<UsuarioDTO> findAll() {
		List<Usuario> list = repository.findAll();
		return list.stream().map(x -> new UsuarioDTO(x)).collect(Collectors.toList());
	}

	public UsuarioDTO findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	public void delete(Long id) {
		// TODO Auto-generated method stub
		
	}

	public UsuarioDTO update(Long id, UsuarioUpdateDTO dto) {
		// TODO Auto-generated method stub
		return null;
	}

	public UsuarioDTO insert(UsuarioInsertDTO dto) {
		// TODO Auto-generated method stub
		return null;
	}


	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Usuario user = repository.findByUsuario(username);
		if (user == null) {
			logger.error("Nome nao encontrado: " + username);
			throw new UsernameNotFoundException("Name not found");
		}
		logger.info("Usuario encontrado: " + username);
		return user;
	}

}
