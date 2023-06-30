package com.summative.mealsonwheels.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseData<T> {

	private boolean status;
	private String messages;
	private T payload;


	public ResponseData(){}
}
