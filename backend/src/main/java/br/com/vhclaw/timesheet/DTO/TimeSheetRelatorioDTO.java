package br.com.vhclaw.timesheet.DTO;

import java.io.Serializable;
import java.text.ParseException;
import java.time.LocalDate;

public class TimeSheetRelatorioDTO implements Serializable {
	

	private static final long serialVersionUID = 1L;
	
	private Long id;
	//@NotNull (message = "A data deve ser preenchida")
	private LocalDate data;
	//@NotNull (message = "A tempo deve ser preenchido")
	private String tempo;
	//@NotBlank (message = "A descricao deve ser preenchida")
	private String descricao;
	private Integer cobranca;
	
	
	public TimeSheetRelatorioDTO() {
		
	}

	public TimeSheetRelatorioDTO(Long id, LocalDate data, String tempo, String descricao, 
			Integer cobranca) throws ParseException{
		this.id = id;
		this.data = data;
		this.tempo = tempo;
		this.descricao = descricao;
		this.cobranca = cobranca;
	}
	
	public TimeSheetRelatorioDTO(TimeSheetDTO entity) {
		id = entity.getId();
		data = entity.getData();
		tempo = entity.getTempo();
		descricao = entity.getDescricao();
		cobranca = entity.getCobranca();
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public String getTempo() {
		return tempo;
	}

	public void setTempo(String tempo) {
		this.tempo = tempo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Integer getCobranca() {
		return cobranca;
	}

	public void setCobranca(Integer cobranca) {
		this.cobranca = cobranca;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TimeSheetRelatorioDTO other = (TimeSheetRelatorioDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	
	

}
