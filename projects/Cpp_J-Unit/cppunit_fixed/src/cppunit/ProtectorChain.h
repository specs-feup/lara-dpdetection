#pragma once

#include <cppunit/Protector.h>
#include <deque>
/*! \brief Protector chain (Implementation).
 * Implementation detail.
 * \internal Protector that protect a Functor using a chain of nested Protector.
 */
class ProtectorChain : public Protector
{
public:
  ProtectorChain();
  ~ProtectorChain() override;
  void push( Protector *protector );
  void pop();
  int count() const;
  bool protect( const Functor &functor,
                const ProtectorContext &context ) override;
private:
  class ProtectFunctor;
private:
  typedef std::deque<Protector *> Protectors;
  Protectors m_protectors;
  typedef std::deque<Functor *> Functors;
};