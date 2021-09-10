package br.com.vhclaw.timesheet.resources;

import br.com.vhclaw.timesheet.DTO.TimeSheetDTO;
import br.com.vhclaw.timesheet.entities.TimeSheet;
import br.com.vhclaw.timesheet.services.TimeSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/timesheet")
public class TimeSheetResource {
	
	@Autowired
	private TimeSheetService service;
	
	@GetMapping
	public ResponseEntity<List<TimeSheetDTO>> findAll() {
		
		List<TimeSheetDTO> list = service.findAll();
		
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<TimeSheetDTO> finById(@PathVariable Long id) {
		TimeSheetDTO dto = service.findById(id);
		return ResponseEntity.ok(dto);
	}
	
	@PostMapping
	public ResponseEntity<TimeSheetDTO> insert(@RequestBody TimeSheetDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);

	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<TimeSheetDTO> update(@PathVariable Long id, @Valid @RequestBody TimeSheetDTO dto) {
		dto = service.update(id, dto);
		
		return ResponseEntity.ok(dto);

	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<TimeSheetDTO> delete(@PathVariable Long id) {
		service.delete(id);

		return ResponseEntity.noContent().build();
	}

	@GetMapping(value = "/id/{id]/date/{date}")
	public ResponseEntity<List<TimeSheet>> findByNameOurDate(@PathVariable Long id,@PathVariable String dti){
		List<TimeSheet> lista = service.findByIdOurDate(id, dti);
		return ResponseEntity.ok().body(lista);
	}
	@GetMapping(value = "/nome/{nome}/data/{data}")
	public ResponseEntity<List<TimeSheet>> findByNameOurDate(@PathVariable String nome,@PathVariable String dti){
		List<TimeSheet> lista = service.findByNameOurDate(nome, dti);
		return ResponseEntity.ok().body(lista);
	}
}
