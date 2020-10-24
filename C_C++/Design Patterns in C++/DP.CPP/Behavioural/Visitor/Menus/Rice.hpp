#ifndef	_CPP_VISITOR_RICE_HPP_
#define _CPP_VISITOR_RICE_HPP_


class Rice : public Ingredient {

	public: explicit Rice( float amount = 1.0f ) :
		Ingredient( amount ) {
	}
	public: void accept( Visitor* visitor ) { assert( visitor );
		return visitor->visit( this );
	}
	public: float getCalories() const {
		return 194.0f;
	};
	public: float getCarbs() const {
		return 41.0f;
	};
	public: float getProtien() const {
		return 0.0f;
	}
	public: float getFat() const {
		return 1.0f;
	}
	public: float getCholesterol() const {
		return 0.0f;
	}
	public: float getSodium() const {
		return 0.3f;
	}
	public: bool isVegetarian() const {
		return true;
	}
	public: std::string toString() const {
		std::stringstream result;
		result << "Rice(" << _amount << ")";
		return result.str();
	}
};


#endif