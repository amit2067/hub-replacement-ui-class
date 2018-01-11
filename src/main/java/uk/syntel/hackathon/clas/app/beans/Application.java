package uk.syntel.hackathon.clas.app.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import io.swagger.annotations.ApiModelProperty;

@Entity
public class Application {

	@Id
	@GenericGenerator(name = "incrementGenerator", strategy = "org.hibernate.id.IncrementGenerator")
    @GeneratedValue(generator="incrementGenerator")
	@ApiModelProperty(notes="Application Id")
	private Long id;
	
	@ApiModelProperty(notes="Customer Id")
	private Long customerId;
	
	@ApiModelProperty(notes="HEI Code")
	private String heiCode;
	
	@ApiModelProperty(notes="Course Code")
	private String courseCode;
	
	@ApiModelProperty(notes="Course Year")
	private String courseYear;
	
	@ApiModelProperty(notes="Tuition fee loan amount")
	private Integer tflAmount;
	
	@ApiModelProperty(notes="Maintenance Loan Amount")
	private Integer mlAmount;
	
	@ApiModelProperty(notes="Created By")
	private String createdBy;
	
	@ApiModelProperty(notes="Attendance Confirmed Indicator")
	private String confirmedAtnInd;

	public Application() {
	}

	public Application(Long id, Long customerId, String heiCode, String courseCode, String courseYear,
			Integer tflAmount, Integer mlAmount, String createdBy, String confirmedAtnInd) {
		this.id = id;
		this.customerId = customerId;
		this.heiCode = heiCode;
		this.courseCode = courseCode;
		this.courseYear = courseYear;
		this.tflAmount = tflAmount;
		this.mlAmount = mlAmount;
		this.createdBy = createdBy;
		this.confirmedAtnInd = confirmedAtnInd;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getHeiCode() {
		return heiCode;
	}

	public void setHeiCode(String heiCode) {
		this.heiCode = heiCode;
	}

	public String getCourseCode() {
		return courseCode;
	}

	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}

	public String getCourseYear() {
		return courseYear;
	}

	public void setCourseYear(String courseYear) {
		this.courseYear = courseYear;
	}

	public Integer getTflAmount() {
		return tflAmount;
	}

	public void setTflAmount(Integer tflAmount) {
		this.tflAmount = tflAmount;
	}

	public Integer getMlAmount() {
		return mlAmount;
	}

	public void setMlAmount(Integer mlAmount) {
		this.mlAmount = mlAmount;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getConfirmedAtnInd() {
		return confirmedAtnInd;
	}

	public void setConfirmedAtnInd(String confirmedAtnInd) {
		this.confirmedAtnInd = confirmedAtnInd;
	}

	@Override
	public String toString() {
		return "Application [id=" + id + ", customerId=" + customerId + ", heiCode=" + heiCode + ", courseCode="
				+ courseCode + ", courseYear=" + courseYear + ", tflAmount=" + tflAmount + ", mlAmount=" + mlAmount
				+ ", createdBy=" + createdBy + ", confirmedAtnInd=" + confirmedAtnInd + "]";
	}

}
