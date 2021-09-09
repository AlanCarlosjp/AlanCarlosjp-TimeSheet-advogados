package br.com.vhclaw.timesheet.DTO;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import br.com.vhclaw.timesheet.entities.Caso;
import br.com.vhclaw.timesheet.entities.TimeSheet;

public class CasoDTO implements Serializable {
	

	private static final long serialVersionUID = 1L;
	
	private Long id;
	@NotBlank (message = "O campo descricao deve ser preenchido")
	private String descricao;
	@NotNull (message = "O campo status deve ser preenchido")
	private Integer statusCobranca;
	private Double valor;
	@NotNull (message = "O cliente deve ser informado")
	private Long clienteId;
	private Integer tipoContrato;
	private Double desconto;
	
	Set<TimeSheetDTO> timesheets = new HashSet<>();
	
	public CasoDTO() {
		
	}

	public CasoDTO(Long id, String descricao, Integer statusCobranca, Double valor, Long clienteId, Integer tipoContrato, Double desconto) {
		this.id = id;
		this.descricao = descricao;
		this.statusCobranca= statusCobranca;
		this.valor = valor;
		this.clienteId = clienteId;
		this.tipoContrato = tipoContrato;
		this.desconto = desconto;
	}
	
	public CasoDTO(Caso entity) {
		id = entity.getId();
		descricao = entity.getDescricao();
		statusCobranca = entity.getStatusCobranca();
		valor = entity.getValor();
		clienteId = entity.getCliente().getId();
		tipoContrato = entity.getTipoContrato();
		desconto = entity.getDesconto();
	//	entity.getTimeSheets().forEach(timesheet -> this.timesheet.add(new TimeSheetDTO(timesheet)));
		}
	
	public CasoDTO(Caso entity, List<TimeSheet> timesheets) {
		
		this(entity);
		
		timesheets.forEach(timesheet -> this.timesheets.add(new TimeSheetDTO(timesheet)));
	}
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Integer getStatusCobranca() {
		return statusCobranca;
	}

	public void setStatusCobranca(Integer statusCobranca) {
		this.statusCobranca = statusCobranca;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public Long getClienteId() {
		return clienteId;
	}

	public void setCliente(Long clienteId) {
		this.clienteId = clienteId;
	}

	//public Set<TimeSheetDTO> getTimesheet() {
	//	return timesheet;
	//}

	public void setClienteId(Long clienteId) {
		this.clienteId = clienteId;
	}

	public Integer getTipoContrato() {
		return tipoContrato;
	}

	public void setTipoContrato(Integer tipoContrato) {
		this.tipoContrato = tipoContrato;
	}

	public Double getDesconto() {
		return desconto;
	}

	public void setDesconto(Double desconto) {
		this.desconto = desconto;
	}
	
	
	

}
