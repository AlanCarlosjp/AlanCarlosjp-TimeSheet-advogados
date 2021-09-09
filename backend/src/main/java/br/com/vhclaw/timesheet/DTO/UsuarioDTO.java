package br.com.vhclaw.timesheet.DTO;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import br.com.vhclaw.timesheet.entities.Usuario;

public class UsuarioDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String usuario;
	private String password;
	
	Set<RoleDTO> roles = new HashSet<>();
	
	public UsuarioDTO() {
		
	}

	public UsuarioDTO(Long id, String usuario, String password) {
		this.id = id;
		this.usuario = usuario;
		this.password = password;
	}
	
	public UsuarioDTO(Usuario entity) {
		id = entity.getId();
		usuario = entity.getUsuario();
		entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
		}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<RoleDTO> getRoles() {
		return roles;
	}
	
	

}
